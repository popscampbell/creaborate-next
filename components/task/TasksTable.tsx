import {
  Button,
  ButtonGroup,
  Loader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Text,
  useTheme
} from "@aws-amplify/ui-react"
import { DataStore } from "aws-amplify"
import useTeamTasks from "components/team/useTeamTasks"
import { MdDelete, MdEdit } from "react-icons/md"
import { Task } from "src/models"

export default function TasksTable(props: { teamId: string }) {
  const { teamId } = props

  const {tasks, load} = useTeamTasks(teamId)
  const { tokens } = useTheme()

  function editTask(task: Task) {}

  function deleteTask(task: Task) {
    DataStore.delete(task)
    load()
  }

  const statusCellWidth = 100
  const priorityCellWidth = 100
  const actionsCellWidth = 150

  return tasks? (
    tasks.length ? (
      <Table highlightOnHover={true}>
        <TableHead>
          <TableRow display="flex">
            <TableCell as="th" grow={1}>Task</TableCell>
            <TableCell as="th" width={statusCellWidth}>Status</TableCell>
            <TableCell as="th" width={priorityCellWidth}>Priority</TableCell>
            <TableCell as="th" width={actionsCellWidth}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map(task => (
            <TableRow key={task.id} display="flex">
              <TableCell grow={1}>
                <Text>{task.name}</Text>
              </TableCell>
              <TableCell width={statusCellWidth}>
                <Text>{task.status}</Text>
              </TableCell>
              <TableCell width={priorityCellWidth}>
                <Text>{task.priority}</Text>
              </TableCell>
              <TableCell width={actionsCellWidth}>
                <ButtonGroup>
                  <Button onClick={() => editTask(task)}>
                    <MdEdit/>
                  </Button>
                  <Button onClick={() => deleteTask(task)} variation="destructive">
                    <MdDelete/>
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ) : <Text>No tasks</Text>
  ) : <Loader/>
}