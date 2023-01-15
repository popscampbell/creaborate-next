import { DataStore } from "aws-amplify"
import ItemDialog from "components/ItemDialog"
import React from "react"
import { Task, TaskPriority, TaskStatus } from "src/models"
import TaskForm, { TaskFormInputs } from "./TaskForm"

export default function EditTaskDialog(props: {
  task: Task
  open: boolean
  onCancel: () => void
  onSaved: (task: Task) => void
}) {
  const { open, onCancel, task, onSaved } = props

  const [model, setModel] = React.useState<TaskFormInputs>({
    name: task.name,
    status: task.status as TaskStatus,
    priority: task.priority as TaskPriority,
    description: task.description ?? undefined,
    dueDate: task.dueDate ?? undefined,
    startDate: task.startDate ?? undefined,
    ownerUsername: task.ownerUsername ?? undefined,
    completedByUsername: task.completedByUsername ?? undefined,
    completedDate: task.completedDate ?? undefined,
  })

  function handleFormChanged(inputs: TaskFormInputs) {
    setModel(inputs)
  }

  function handleSaved() {
    DataStore.save(Task.copyOf(task, copy => {
      copy.searchName = (copy.name = model.name).toLowerCase()
      copy.status = model.status
      copy.priority = model.priority
      copy.searchDescription = (copy.description = model.description)?.toLowerCase()
      copy.dueDate = model.dueDate
      copy.startDate = model.startDate
      copy.ownerUsername = model.ownerUsername
      copy.completedByUsername = model.completedByUsername
      copy.completedDate = model.completedDate
    })).then(savedTask => onSaved(savedTask))
  }

  return (
    <ItemDialog
      title={task.name}
      open={open}
      onCancel={onCancel}
      onSaved={handleSaved}
    >
      <TaskForm inputs={model} onChange={handleFormChanged} teamID={task.teamID} />
    </ItemDialog>
  )
}