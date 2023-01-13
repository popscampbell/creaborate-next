import { Flex, Radio, RadioGroupField, TextAreaField, TextField, useTheme } from "@aws-amplify/ui-react"
import React from "react"
import { TaskPriority, TaskStatus } from "src/models"

export interface TaskFormInputs {
  name: string
  status: TaskStatus
  priority: TaskPriority
  description?: string
}

export default function TaskForm(props: {
  inputs: TaskFormInputs
  onChange: (inputs: TaskFormInputs) => void
}) {
  const { inputs, onChange } = props

  const { tokens } = useTheme()

  const [name, setName] = React.useState(inputs.name)
  const [status, setStatus] = React.useState(inputs.status)
  const [priority, setPriority]= React.useState(inputs.priority)
  const [description, setDescription] = React.useState(inputs.description)

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
            priority
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
            description: e.target.value,
            status,
            priority
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
          })
        }}>
        <Radio value={TaskPriority.HIGH}>High</Radio>
        <Radio value={TaskPriority.MEDIUM}>Medium</Radio>
        <Radio value={TaskPriority.LOW}>Low</Radio>
      </RadioGroupField>
    </Flex>
  )
}