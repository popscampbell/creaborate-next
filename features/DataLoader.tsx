import { useAppDispatch } from "app/hooks"
import { Auth, DataStore } from "aws-amplify"
import _ from "lodash"
import React from "react"
import { Task, Team, TeamContact, TeamEvent, TeamImage, TeamInvitation, TeamMember, TeamMemberRole, TeamProject, UserContact, UserImage, UserProfile } from "src/models"
import { setTeam, setTeamContacts, setTeamEvents, setTeamImages, setTeamInvitations, setTeamMembers, setTeamProjects, setTeamTasks, TeamMemberWithName } from "./teams/teamSlice"
import { setUserContacts, setUserImages, setUserInvitations, setUsername, setUserProfile, setUserTasks, setUserTeams, TeamWithUserRole } from "./user/userSlice"

async function getTeamMemberWithName(teamMember: TeamMember): Promise<TeamMemberWithName> {
  const profile = (
    await DataStore.query(UserProfile, (userProfile) =>
      userProfile.username.eq(teamMember.username)
    )
  )[0]

  return { ...teamMember, ...{ name: profile?.name || teamMember.username } }
}

async function getTeamWithUserRole(username: string, team: Team): Promise<TeamWithUserRole | null> {
  const teamMembership = await team.TeamMembers.toArray()
    .then(members => members.find(member => member.username === username))

  return teamMembership ? { ...team, ...{ role: teamMembership.role as TeamMemberRole }} : null
}

function removeNullsFromArray<T>(arr: (T | null)[]): T[] {
  return arr.filter(i => i !== null) as T[]
}

export function DataLoader(props: {
  children: any
  teamID?: string
}) {
  const { children, teamID } = props

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    Auth.currentAuthenticatedUser().then(currentUser => {
      dispatch(setUsername(currentUser.username))

      DataStore
        .query(UserProfile, profile => profile.username.eq(currentUser.username))
        .then(results => results[0] ?? null)
        .then(profile => {
          dispatch(setUserProfile(profile))
          return profile
        })

      DataStore
        .query(Team, team => team.TeamMembers.username.eq(currentUser.username))
        .then(async teams => await Promise.all(teams.map(team => getTeamWithUserRole(currentUser.username, team))))
        .then(result => removeNullsFromArray(result))
        .then((teams) => dispatch(setUserTeams(teams)))

      DataStore.query(Task, task => task.ownerUsername.eq(currentUser.username))
        .then(tasks => dispatch(setUserTasks(tasks)))

      DataStore.query(UserImage, image => image.username.eq(currentUser.username))
        .then(images => dispatch(setUserImages(images)))

      DataStore.query(UserContact, contact => contact.username.eq(currentUser.username))
        .then(contacts => dispatch(setUserContacts(contacts)))

      DataStore.query(TeamInvitation, invitation => invitation.username.eq(currentUser.username))
        .then(invitations => dispatch(setUserInvitations(invitations)))

      if (teamID) {
        DataStore.query(Team, teamID)
          .then(team => team ? getTeamWithUserRole(currentUser.username, team): null)
          .then(team => team && dispatch(setTeam(team)))

        DataStore.query(TeamMember, member => member.teamID.eq(teamID))
          .then(async members => await Promise.all(members.map(member => getTeamMemberWithName(member))))
          .then(teamMembers => dispatch(setTeamMembers(teamMembers)))

        DataStore.query(Task, item => item.teamID.eq(teamID))
          .then(items => {
            dispatch(setTeamTasks(items))
          })

        DataStore.query(TeamProject, item => item.teamID.eq(teamID))
          .then(items => dispatch(setTeamProjects(items)))

        DataStore.query(TeamImage, item => item.teamID.eq(teamID))
          .then(items => dispatch(setTeamImages(items)))

        DataStore.query(TeamContact, item => item.teamID.eq(teamID))
          .then(items => dispatch(setTeamContacts(items)))

        DataStore.query(TeamEvent, item => item.teamID.eq(teamID))
          .then(items => dispatch(setTeamEvents(items)))

        DataStore.query(TeamInvitation, item => item.teamID.eq(teamID))
          .then(items => dispatch(setTeamInvitations(items)))
      }
    })
  }, [teamID])

  return <>{children}</>
}
