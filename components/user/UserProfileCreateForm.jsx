/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react"
import {
  Button,
  Flex,
  Grid,
  Radio,
  RadioGroupField,
  TextAreaField,
  TextField,
  useAuthenticator,
} from "@aws-amplify/ui-react"
import { getOverrideProps } from "@aws-amplify/ui-react/internal"
import { UserProfile } from "src/models"
import { fetchByPath, validateField } from "ui-components/utils"
import { DataStore } from "aws-amplify"
export default function UserProfileCreateForm(props) {
  const { user } = useAuthenticator()
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props
  const initialValues = {
    username: "",
    visibility: undefined,
    name: "",
    tagline: "",
    about: "",
  }
  const [username, setUsername] = React.useState(user.username)
  const [visibility, setVisibility] = React.useState(initialValues.visibility)
  const [name, setName] = React.useState(initialValues.name)
  const [tagline, setTagline] = React.useState(initialValues.tagline)
  const [about, setAbout] = React.useState(initialValues.about)
  const [errors, setErrors] = React.useState({})
  const resetStateValues = () => {
    setUsername(user.username)
    setVisibility(initialValues.visibility)
    setName(initialValues.name)
    setTagline(initialValues.tagline)
    setAbout(initialValues.about)
    setErrors({})
  }
  const validations = {
    username: [{ type: "Required" }],
    visibility: [{ type: "Required" }],
    name: [{ type: "Required" }],
    tagline: [],
    about: [],
  }
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue ? getDisplayValue(currentValue) : currentValue
    let validationResponse = validateField(value, validations[fieldName])
    const customValidator = fetchByPath(onValidate, fieldName)
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse)
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }))
    return validationResponse
  }
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault()
        let modelFields = {
          username,
          visibility,
          name,
          searchName,
          tagline,
          about,
        }
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              )
              return promises
            }
            promises.push(runValidationTasks(fieldName, modelFields[fieldName]))
            return promises
          }, [])
        )
        if (validationResponses.some((r) => r.hasError)) {
          return
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields)
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined
            }
          })
          await DataStore.save(new UserProfile(modelFields))
          if (onSuccess) {
            onSuccess(modelFields)
          }
          if (clearOnSuccess) {
            resetStateValues()
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message)
          }
        }
      }}
      {...getOverrideProps(overrides, "UserProfileCreateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={true}
        value={username}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              username: value,
              visibility,
              name,
              searchName: name.toLowerCase(),
              tagline,
              about,
            }
            const result = onChange(modelFields)
            value = result?.username ?? value
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value)
          }
          setUsername(value)
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <RadioGroupField
        direction="row"
        label="Visibility"
        name="visibility"
        isReadOnly={false}
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              username,
              visibility: value,
              name,
              searchName: name.toLowerCase(),
              tagline,
              about,
            }
            const result = onChange(modelFields)
            value = result?.visibility ?? value
          }
          if (errors.visibility?.hasError) {
            runValidationTasks("visibility", value)
          }
          setVisibility(value)
        }}
        onBlur={() => runValidationTasks("visibility", visibility)}
        errorMessage={errors.visibility?.errorMessage}
        hasError={errors.visibility?.hasError}
        {...getOverrideProps(overrides, "visibility")}
      >
        <Radio
          children="Private"
          value="PRIVATE"
          {...getOverrideProps(overrides, "visibilityRadio0")}
        ></Radio>
        <Radio
          children="Public"
          value="PUBLIC"
          {...getOverrideProps(overrides, "visibilityRadio1")}
        ></Radio>
      </RadioGroupField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              username,
              visibility,
              name: value,
              searchName: name.toLowerCase(),
              tagline,
              about,
            }
            const result = onChange(modelFields)
            value = result?.name ?? value
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value)
          }
          setName(value)
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Tagline"
        isRequired={false}
        isReadOnly={false}
        value={tagline}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              username,
              visibility,
              name,
              searchName: name.toLowerCase(),
              tagline: value,
              about,
            }
            const result = onChange(modelFields)
            value = result?.tagline ?? value
          }
          if (errors.tagline?.hasError) {
            runValidationTasks("tagline", value)
          }
          setTagline(value)
        }}
        onBlur={() => runValidationTasks("tagline", tagline)}
        errorMessage={errors.tagline?.errorMessage}
        hasError={errors.tagline?.hasError}
        {...getOverrideProps(overrides, "tagline")}
      ></TextField>
      <TextAreaField
        label="About"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              username,
              visibility,
              name,
              searchName: name.toLowerCase(),
              tagline,
              about: value,
            }
            const result = onChange(modelFields)
            value = result?.about ?? value
          }
          if (errors.about?.hasError) {
            runValidationTasks("about", value)
          }
          setAbout(value)
        }}
        onBlur={() => runValidationTasks("about", about)}
        errorMessage={errors.about?.errorMessage}
        hasError={errors.about?.hasError}
        {...getOverrideProps(overrides, "about")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault()
            resetStateValues()
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel()
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  )
}
