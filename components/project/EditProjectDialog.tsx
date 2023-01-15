import { DataStore } from "aws-amplify"
import ItemDialog from "components/ItemDialog"
import React from "react"
import { TeamProject, ProjectStatus } from "src/models"
import ProjectForm, { ProjectFormInputs } from "./ProjectForm"

export default function EditTaskDialog(props: {
  project: TeamProject
  open: boolean
  onCancel: () => void
  onSaved: (project: TeamProject) => void
}) {
  const { open, onCancel, project, onSaved } = props

  const [model, setModel] = React.useState<ProjectFormInputs>({
    name: project.name,
    description: project.description ?? undefined,
    status: project.status as ProjectStatus,
    startDate: project.startDate ?? undefined,
    endDate: project.endDate ?? undefined,
  })

  function handleFormChanged(inputs: ProjectFormInputs) {
    setModel(inputs)
  }

  function handleSaved() {
    DataStore.save(TeamProject.copyOf(project, copy => {
      copy.searchName = (copy.name = model.name).toLowerCase()
      copy.status = model.status
      copy.searchDescription = (copy.description = model.description)?.toLowerCase()
      copy.startDate = model.startDate
    })).then(savedTask => onSaved(savedTask))
  }

  return (
    <ItemDialog
      title={project.name}
      open={open}
      onCancel={onCancel}
      onSaved={handleSaved}
    >
      <ProjectForm inputs={model} onChange={handleFormChanged} teamID={project.teamID} />
    </ItemDialog>
  )
}