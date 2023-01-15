import {
  Button,
  ButtonGroup,
  Placeholder,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Text,
  useTheme
} from "@aws-amplify/ui-react"
import { useAppSelector } from "app/hooks"
import { DataStore } from "aws-amplify"
import React from "react"
import { MdDelete, MdEdit } from "react-icons/md"
import { Task } from "src/models"
import EditTaskDialog from "./EditTaskDialog"

export default function TasksTable(props: {
  onTaskSaved?: (task: Task) => void
}) {
  const { onTaskSaved } = props

  const { tasks } = useAppSelector(state => state.team)
  const { tokens } = useTheme()

  const [selectedTask, setSelectedTask] = React.useState<Task>()

  function editTask(task: Task) {
    setSelectedTask(task)
  }

  function handleTaskSaved(task: Task) {
    setSelectedTask(undefined)
    onTaskSaved?.(task)
  }

  function handleTaskCanceled() {
    setSelectedTask(undefined)
  }

  function deleteTask(task: Task) {
    DataStore.delete(task)
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
        {selectedTask && <EditTaskDialog
          open={selectedTask !== undefined}
          task={selectedTask}
          onSaved={handleTaskSaved}
          onCancel={handleTaskCanceled}
        />}
      </Table>
    ) : <Text>No tasks</Text>
  ) : <Placeholder/>
}