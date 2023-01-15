import { Flex, Radio, RadioGroupField, TextAreaField, TextField, useTheme } from "@aws-amplify/ui-react"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import React from "react"
import { ProjectStatus } from "src/models"
import MuiTextField from '@mui/material/TextField'

export interface ProjectFormInputs {
  name: string
  status: ProjectStatus
  description?: string
  startDate?: string
  endDate?: string
}

export default function TaskForm(props: {
  inputs: ProjectFormInputs
  onChange: (inputs: ProjectFormInputs) => void
  teamID: string
}) {
  const { inputs, onChange, teamID } = props

  const { tokens } = useTheme()

  const [name, setName] = React.useState(inputs.name)
  const [status, setStatus] = React.useState(inputs.status)
  const [description, setDescription] = React.useState(inputs.description)
  const [startDate, setStartDate] = React.useState(inputs.startDate)
  const [endDate, setEndDate] = React.useState(inputs.endDate)

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
            description,
            startDate,
            endDate,
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
            description: e.target.value,
            startDate,
            endDate,
          })
        }}
      />

      <RadioGroupField
        label="Status"
        name="status"
        value={status}
        onChange={(e) => {
          setStatus(e.target.value as ProjectStatus)
          onChange({
            name,
            status: e.target.value as ProjectStatus,
            description,
            startDate,
            endDate,
          })
        }}>
        <Radio value={ProjectStatus.DRAFT}>Draft</Radio>
        <Radio value={ProjectStatus.ACTIVE}>Active</Radio>
        <Radio value={ProjectStatus.COMPLETED}>Completed</Radio>
        <Radio value={ProjectStatus.CANCELED}>Canceled</Radio>
      </RadioGroupField>

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

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Ended at"
          value={endDate}
          onChange={(newValue) => {
            setEndDate(newValue ?? undefined);
          }}
          renderInput={(params) => <MuiTextField {...params} />}
        />
      </LocalizationProvider>
    </Flex>
  )
}