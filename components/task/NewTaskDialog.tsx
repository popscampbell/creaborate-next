import { DataStore } from "aws-amplify"
import ItemDialog from "components/ItemDialog"
import React from "react"
import { Task, TaskPriority, TaskStatus } from "src/models"
import TaskForm, { TaskFormInputs } from "./TaskForm"

export default function NewTaskDialog(props: {
  teamID: string
  open: boolean
  onCancel: () => void
  onSaved: (task: Task) => void
}) {
  const { open, onCancel, teamID, onSaved } = props

  const [model, setModel] = React.useState<TaskFormInputs>({
    name: "",
    status: TaskStatus.ACTIVE,
    priority: TaskPriority.MEDIUM,
    description: "",
    dueDate: undefined,
    startDate: undefined,
    ownerUsername: undefined,
    completedByUsername: undefined,
    completedDate: undefined,
  })

  function handleFormChanged(inputs: TaskFormInputs) {
    setModel(inputs)
  }

  function handleSaved() {
    DataStore.save(new Task({
      ...model,
      ...{
        teamID,
        searchName: model.name.toLowerCase(),
        searchDescription: model.description?.toLowerCase() ?? ""
        }
      })).then((task) => onSaved(task))
  }

  return (
    <ItemDialog
      title="New task"
      open={open}
      onCancel={onCancel}
      onSaved={handleSaved}
    >
      <TaskForm inputs={model} onChange={handleFormChanged} teamID={teamID} />
    </ItemDialog>
  )
}