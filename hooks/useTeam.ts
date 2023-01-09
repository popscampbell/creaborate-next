import { DataStore } from "aws-amplify"
import { Team } from "models"
import React from "react"

export default function useTeam(id: string) {
  const [team, setTeam] = React.useState<Team>()

  React.useEffect(() => {
    DataStore.query(Team, id).then((team) => setTeam(team))
  }, [id])

  return team
}
