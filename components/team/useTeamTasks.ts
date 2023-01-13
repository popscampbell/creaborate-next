import { DataStore } from "aws-amplify"
import React from "react"
import { Task } from "src/models"

export default function useTeamTasks(teamId: string, subscribe?: boolean) {
  const [tasks, setTasks] = React.useState<Task[]>()

  function load() {
    setTasks(undefined)

    if (teamId) {
      DataStore.query(Task, t => t.teamID.eq(teamId))
        .then(rows => {
          setTasks(rows)

          if (subscribe) {
            DataStore.observeQuery(Task, t => t.teamID.eq(teamId))
              .subscribe(result => {
                setTasks(result.items)
              })
          }
        })
    }
  }
  React.useEffect(() => {
    load()
  }, [teamId])

  return { tasks, load }
}