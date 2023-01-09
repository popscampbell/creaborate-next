import { DataStore } from "aws-amplify"
import { Team, TeamMember, UserProfile } from "models"
import React from "react"

type teamMemberWithName = TeamMember & { name: String }

export default function useTeamMembers(teamId: string) {
  const [teamMembers, setTeamMembers] = React.useState<teamMemberWithName[]>()

  React.useEffect(() => {
    async function getTeamMemberWithName(teamMember: TeamMember) {
      const profile = (
        await DataStore.query(UserProfile, (userProfile) =>
          userProfile.username.eq(teamMember.username)
        )
      )[0]

      return { ...teamMember, ...{ name: profile.name } }
    }

    DataStore.query(Team, teamId).then(
      async (team) =>
        team &&
        setTeamMembers(
          await team.teamMembers
            .toArray()
            .then(async (members) =>
              Promise.all(
                members.map((member) => getTeamMemberWithName(member))
              )
            )
        )
    )
  }, [teamId])

  return teamMembers
}
