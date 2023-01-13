import { DataStore } from "aws-amplify"
import React from "react"
import { Task } from "src/models"

export default function useTeamTasks(teamId: string, subscribe?: boolean) {
  const [tasks, setTasks] = React.useState<Task[]>()

  React.useEffect(() => {
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
    } else {
      setTasks(undefined)
    }
  }, [teamId])

  return tasks
}