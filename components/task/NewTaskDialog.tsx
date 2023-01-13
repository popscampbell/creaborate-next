import { Button } from "@aws-amplify/ui-react"
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { DataStore } from "aws-amplify"
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
  })

  function handleDialogChanged(inputs: TaskFormInputs) {
    setModel(inputs)
  }

  function handleCloseDialog() {
    onCancel()
  }

  function handleCancelDialog() {
    onCancel()
  }

  function handleAcceptDialog() {
    DataStore.save(new Task({
      ...model,
      ...{
        teamID,
        searchName: model.name.toLowerCase(),
        searchDescription: model.description?.toLowerCase() ?? ""
      }
    })).then(newTask => {
      onSaved(newTask)
    })
  }

  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <DialogTitle>New task</DialogTitle>
      <DialogContent>
        <TaskForm inputs={model} onChange={handleDialogChanged} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancelDialog}>Cancel</Button>
        <Button onClick={handleAcceptDialog}>Add</Button>
      </DialogActions>
    </Dialog>
  )
}