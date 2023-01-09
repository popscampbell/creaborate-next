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
} from "@aws-amplify/ui-react"
import { getOverrideProps } from "@aws-amplify/ui-react/internal"
import { UserProfile } from "models"
import { fetchByPath, validateField } from "./utils"
import { DataStore } from "aws-amplify"
export default function UserProfileUpdateForm(props) {
  const {
    id: idProp,
    userProfile,
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
  const [visibility, setVisibility] = React.useState(initialValues.visibility)
  const [name, setName] = React.useState(initialValues.name)
  const [tagline, setTagline] = React.useState(initialValues.tagline)
  const [about, setAbout] = React.useState(initialValues.about)
  const [errors, setErrors] = React.useState({})
  const resetStateValues = () => {
    const cleanValues = userProfileRecord
      ? { ...initialValues, ...userProfileRecord }
      : initialValues
    setVisibility(cleanValues.visibility)
    setName(cleanValues.name)
    setTagline(cleanValues.tagline)
    setAbout(cleanValues.about)
    setErrors({})
  }
  const [userProfileRecord, setUserProfileRecord] = React.useState(userProfile)
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UserProfile, idProp)
        : userProfile
      setUserProfileRecord(record)
    }
    queryData()
  }, [idProp, userProfile])
  React.useEffect(resetStateValues, [userProfileRecord])
  const validations = {
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
          visibility,
          name,
          searchName: name.toLowerCase(),
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
          await DataStore.save(
            UserProfile.copyOf(userProfileRecord, (updated) => {
              Object.assign(updated, modelFields)
            })
          )
          if (onSuccess) {
            onSuccess(modelFields)
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message)
          }
        }
      }}
      {...getOverrideProps(overrides, "UserProfileUpdateForm")}
      {...rest}
    >
      <RadioGroupField
        direction="row"
        label="Visibility"
        name="visibility"
        isReadOnly={false}
        isRequired={true}
        defaultValue={visibility}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
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
        value={about}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault()
            resetStateValues()
          }}
          isDisabled={!(idProp || userProfile)}
          {...getOverrideProps(overrides, "ResetButton")}
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
            isDisabled={
              !(idProp || userProfile) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  )
}