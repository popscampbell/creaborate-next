import { DataStore } from "aws-amplify"
import { Team, TeamMember, UserProfile } from "src/models"
import React from "react"

export type TeamMemberWithName = TeamMember & { name: String }

async function getTeamMemberWithName(teamMember: TeamMember) {
  const profile = (
    await DataStore.query(UserProfile, (userProfile) =>
      userProfile.username.eq(teamMember.username)
    )
  )[0]

  return { ...teamMember, ...{ name: profile?.name || teamMember.username } }
}

export function useTeamMembersByTeam(team: Team, subscribe?: boolean) {
  const [teamMembers, setTeamMembers] = React.useState<TeamMemberWithName[]>()

  React.useEffect(() => {
    DataStore.query(TeamMember, tm => tm.teamID.eq(team.id))
      .then(async rows => Promise.all(rows.map(row => getTeamMemberWithName(row))))
      .then(members => {
        setTeamMembers(members)

        if (subscribe) {
          DataStore.observeQuery(TeamMember, tm => tm.teamID.eq(team.id))
            .subscribe(async result => Promise.all(result.items.map(row => getTeamMemberWithName(row)))
              .then(members => setTeamMembers(members)))
        }
      })

    if (team.TeamMembers) {
      team.TeamMembers
        .toArray()
        .then(async (members) => {
          return Promise.all(
            members.map((member) => getTeamMemberWithName(member))
          )
        }).then(result => {
          setTeamMembers(result)
        })
    }
  }, [team])

  return teamMembers
}

export default function useTeamMembers(teamId: string) {
  const [teamMembers, setTeamMembers] = React.useState<TeamMemberWithName[]>()

  React.useEffect(() => {
    DataStore.query(Team, teamId).then(
      async (team) => {
        team &&
          setTeamMembers(
            await team.TeamMembers
              .toArray()
              .then(async (members) => {
                return Promise.all(
                  members.map((member) => getTeamMemberWithName(member))
                )
              })
          )
      })
  }, [teamId])

  return teamMembers
}
