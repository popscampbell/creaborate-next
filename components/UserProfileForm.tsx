import {
  Button,
  ButtonGroup,
  Flex,
  SwitchField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react"
import { UserProfile, UserProfileVisibility } from "../models"
import React from "react"
import { DataStore } from "aws-amplify"

export default function UserProfileForm(props: { userProfile: UserProfile }) {
  const { userProfile } = props

  const [visibility, setVisibility] = React.useState<UserProfileVisibility>(
    userProfile.visibility as UserProfileVisibility
  )
  const [name, setName] = React.useState(userProfile.name)
  const [tagline, setTagline] = React.useState(userProfile.tagline)
  const [about, setAbout] = React.useState(userProfile.about)

  function handleSave() {
    DataStore.save(
      userProfile.id
        ? UserProfile.copyOf(userProfile, (copy) => {
            copy.visibility = visibility
            copy.name = name
            copy.searchName = name.toLowerCase()
            copy.tagline = tagline
            copy.about = about
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
      <Flex wrap="wrap">
        <TextField
          label="Tagline"
          value={tagline || ""}
          maxWidth={300}
          onChange={(event) => setTagline(event.target.value)}
        />
      </Flex>
      <Flex wrap="wrap">
        <TextAreaField
          label="About"
          value={about || ""}
          onChange={(event) => setAbout(event.target.value)}
        />
      </Flex>

      <ButtonGroup direction="row" justifyContent="flex-end">
        <Button onClick={handleSave}>Save</Button>
      </ButtonGroup>
    </Flex>
  )
}
