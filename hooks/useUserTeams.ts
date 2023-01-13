import { Auth, DataStore } from "aws-amplify"
import { Team, TeamMember } from "src/models"
import React from "react"
import { fetchTeams } from "features/teams/teamsSlice"

export default function useUserTeams() {
  const [teams, setTeams] = React.useState<Team[]>()

  React.useEffect(() => {
    // Auth.currentAuthenticatedUser().then((user) => {
    //   DataStore.query(TeamMember, (teamMember) =>
    //     teamMember.username.eq(user.username)
    //   ).then(async (results) =>
    //     Promise.all(results.map((teamMember) => teamMember.Team))
    //       .then((results) => setTeams(results as Team[]))
    //   )
    // })

    fetchTeams()
  }, [])

  return teams
}
