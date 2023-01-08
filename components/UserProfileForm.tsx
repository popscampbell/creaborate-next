import {
  Button,
  ButtonGroup,
  Flex,
  SwitchField,
  TextField
} from "@aws-amplify/ui-react"
import { UserProfile, UserProfileVisibility } from "../src/models"
import React from "react"
import { DataStore } from "aws-amplify"

export default function UserProfileForm(props: { userProfile: UserProfile }) {
  const { userProfile } = props

  const [visibility, setVisibility] = React.useState<UserProfileVisibility>(
    userProfile.visibility as UserProfileVisibility
  )
  const [name, setName] = React.useState(userProfile.name)

  function handleSave() {
    DataStore.save(userProfile.id
      ? UserProfile.copyOf(userProfile, copy => {
        copy.visibility = visibility
        copy.name = name
      })
      : userProfile
      ).then(() => alert("Saved"))
  }

  return (
    <Flex grow={1} direction="column" rowGap={16}>
      <SwitchField
        label="Public"
        isChecked={visibility === UserProfileVisibility.PUBLIC}
        onChange={(event) =>
          setVisibility(
            event.target.checked
              ? UserProfileVisibility.PUBLIC
              : UserProfileVisibility.PRIVATE
          )
        }
      />
      <Flex wrap="wrap">
        <TextField
          label="Name *"
          value={name}
          maxWidth={300}
          isRequired
          onChange={(event) => setName(event.target.value)}
        />
      </Flex>

      <ButtonGroup direction="row" justifyContent="flex-end">
        <Button onClick={handleSave}>Save</Button>
      </ButtonGroup>
    </Flex>
  )
}
