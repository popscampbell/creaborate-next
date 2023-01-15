import { DataStore } from "aws-amplify"
import ItemDialog from "components/ItemDialog"
import React from "react"
import { ProjectStatus, TeamProject } from "src/models"
import TaskForm, { ProjectFormInputs } from "./ProjectForm"

export default function NewTaskDialog(props: {
  teamID: string
  open: boolean
  onCancel: () => void
  onSaved: (project: TeamProject) => void
}) {
  const { open, onCancel, teamID, onSaved } = props

  const [model, setModel] = React.useState<ProjectFormInputs>({
    name: "",
    status: ProjectStatus.DRAFT,
    description: "",
    startDate: undefined,
    endDate: undefined,
  })

  function handleFormChanged(inputs: ProjectFormInputs) {
    setModel(inputs)
  }

  function handleSaved() {
    DataStore.save(new TeamProject({
      ...model,
      ...{
        teamID,
        searchName: model.name.toLowerCase(),
        searchDescription: model.description?.toLowerCase() ?? ""
        }
      })).then((project) => onSaved(project))
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