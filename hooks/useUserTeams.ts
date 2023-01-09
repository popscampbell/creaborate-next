import { Auth, DataStore } from "aws-amplify"
import { Team, TeamMember } from "models"
import React from "react"

export default function useUserTeams() {
  const [teams, setTeams] = React.useState<Team[]>()

  React.useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      DataStore.query(TeamMember, (teamMember) =>
        teamMember.username.eq(user.username)
      ).then(async (results) =>
        Promise.all(results.map((teamMember) => teamMember.team))
          .then((results) => results.filter((result) => result !== undefined))
          .then((results) => setTeams(results as Team[]))
      )
    })
  }, [])

  return teams
}
