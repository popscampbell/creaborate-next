import { DataStore } from "aws-amplify"
import { Team } from "src/models"
import React from "react"

export default function useTeam(id: string, subscribe = false) {
  const [team, setTeam] = React.useState<Team>()
  let sub: any

  React.useEffect(() => {
    DataStore.query(Team, id).then((team) => {
      setTeam(team)
      if (subscribe && team) {
        sub = DataStore.observe(Team, team.id).subscribe(result => setTeam(result.element))
      }
    })

    return sub && sub.unusbscribe()
  }, [id])

  return team
}