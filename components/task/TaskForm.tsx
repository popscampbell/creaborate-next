import { Autocomplete, Flex, Radio, RadioGroupField, TextAreaField, TextField, useTheme } from "@aws-amplify/ui-react"
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from "react"
import { TaskPriority, TaskStatus } from "src/models"
import MuiTextField from '@mui/material/TextField'
import { useAppSelector } from "app/hooks"

export interface TaskFormInputs {
  name: string
  status: TaskStatus
  priority: TaskPriority
  description?: string
  dueDate?: string
  startDate?: string
  ownerUsername?: string
  completedByUsername?: string
  completedDate?: string
}

export default function TaskForm(props: {
  inputs: TaskFormInputs
  onChange: (inputs: TaskFormInputs) => void
  teamID: string
}) {
  const { inputs, onChange, teamID } = props

  const { tokens } = useTheme()
  const teamMembers = useAppSelector(state => state.team.members)

  const [name, setName] = React.useState(inputs.name)
  const [status, setStatus] = React.useState(inputs.status)
  const [priority, setPriority]= React.useState(inputs.priority)
  const [description, setDescription] = React.useState(inputs.description)
  const [dueDate, setDueDate] = React.useState(inputs.dueDate)
  const [startDate, setStartDate] = React.useState(inputs.startDate)
  const [ownerUsername, setOwnerUsername] = React.useState(inputs.ownerUsername)
  const [completedByUsername, setCompletedByUsername] = React.useState(inputs.completedByUsername)
  const [completedDate, setCompletedDate] = React.useState(inputs.completedDate)

  return (
    <Flex as="form" direction="column">
      <TextField
        label="Name"
        width={420}
        value={name}
        onChange={(e) => {
          setName(e.target.value)
          onChange({
            name: e.target.value,
            status,
            priority,
            description,
            dueDate,
            startDate,
            ownerUsername,
            completedByUsername,
            completedDate,
          })
        }}
      />

      <TextAreaField
        label="Description"
        width={420}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
          onChange({
            name,
            status,
            priority,
            description: e.target.value,
            dueDate,
            startDate,
            ownerUsername,
            completedByUsername,
            completedDate,
          })
        }}
      />

      <RadioGroupField
        label="Status"
        name="status"
        value={status}
        onChange={(e) => {
          setStatus(e.target.value as TaskStatus)
          onChange({
            name,
            status: e.target.value as TaskStatus,
            priority,
            description,
            dueDate,
            startDate,
            ownerUsername,
            completedByUsername,
            completedDate,
          })
        }}>
        <Radio value={TaskStatus.ACTIVE}>Active</Radio>
        <Radio value={TaskStatus.CLOSED}>Closed</Radio>
        <Radio value={TaskStatus.ARCHIVED}>Archived</Radio>
      </RadioGroupField>

      <RadioGroupField
        label="Priority"
        name="priority"
        value={priority}
        onChange={(e) => {
          setPriority(e.target.value as TaskPriority)
          onChange({
            name,
            status,
            priority: e.target.value as TaskPriority,
            description,
            dueDate,
            startDate,
            ownerUsername,
            completedByUsername,
            completedDate,
          })
        }}>
        <Radio value={TaskPriority.HIGH}>High</Radio>
        <Radio value={TaskPriority.MEDIUM}>Medium</Radio>
        <Radio value={TaskPriority.LOW}>Low</Radio>
      </RadioGroupField>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Due"
          value={dueDate}
          onChange={(newValue) => {
            setDueDate(newValue ?? undefined);
          }}
          renderInput={(params) => <MuiTextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Started"
          value={startDate}
          onChange={(newValue) => {
            setStartDate(newValue ?? undefined);
          }}
          renderInput={(params) => <MuiTextField {...params} />}
        />
      </LocalizationProvider>
      <Autocomplete
        label="Owner"
        options={teamMembers?.map(tm => ({ id: tm.username, label: tm.name })) ?? []}
        value={ownerUsername}
        onChange={e => {
          setOwnerUsername(e.target.value)
        }}
      />
      <Autocomplete
        label="Completed by"
        options={teamMembers?.map(tm => ({ id: tm.username, label: tm.name })) ?? []}
        value={completedByUsername}
        onChange={e => {
          setCompletedByUsername(e.target.value)
        }}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Completed on"
          value={completedDate}
          onChange={(newValue) => {
            setCompletedDate(newValue ?? undefined);
          }}
          renderInput={(params) => <MuiTextField {...params} />}
        />
      </LocalizationProvider>
    </Flex>
  )
}