import { Collection, Placeholder, Text } from "@aws-amplify/ui-react"
import { useAppSelector } from "app/hooks"

export default function ProjectList(props: { teamID: string }) {
  const { teamID } = props

  const projects = useAppSelector(state => state.team.projects)

  return projects? (
    <Collection
      type="list"
      items={projects}
    >
      {(project) => (
        <Text key={project.id}>{project.name}</Text>
      )}
    </Collection>
  ) : <Placeholder/>
 }