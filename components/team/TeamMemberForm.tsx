import { Autocomplete, ComboBoxOption, Flex } from "@aws-amplify/ui-react"
import useSearchUsers from "hooks/useSearchUsers"
import React, { ChangeEvent } from "react"

export default function TeamMemberForm(props: {
  filter: (option: ComboBoxOption) => boolean
  onSelect: (option: ComboBoxOption) => void
}) {
  const { onSelect, filter } = props

  const [query, setQuery] = React.useState("")

  const users = useSearchUsers(query)

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    setQuery(evt.target.value)
  }

  function handleClear() {
    setQuery("")
  }

  return (
    <Autocomplete
      label="Search"
      placeholder="Search for someone..."
      width={420}
      value={query}
      options={users?.map(u => ({ id: u.username, label: u.name }))}
      onChange={handleChange}
      onClear={handleClear}
      onSelect={onSelect}
      optionFilter={filter}
    />
  )
}