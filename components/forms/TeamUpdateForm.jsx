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
import { Team, TeamType } from "models"
import { fetchByPath, validateField } from "./utils"
import { DataStore } from "aws-amplify"
export default function TeamUpdateForm(props) {
  const {
    id: idProp,
    team,
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
    name: "",
    visibility: undefined,
    teamType: undefined,
    customTeamType: "",
    description: "",
  }
  const [name, setName] = React.useState(initialValues.name)
  const [visibility, setVisibility] = React.useState(initialValues.visibility)
  const [teamType, setTeamType] = React.useState(initialValues.teamType)
  const [showCustomTeamType, setShowCustomTeamType] = React.useState(false)
  const [customTeamType, setCustomTeamType] = React.useState(
    initialValues.customTeamType
  )
  const [description, setDescription] = React.useState(
    initialValues.description
  )
  const [errors, setErrors] = React.useState({})
  const resetStateValues = () => {
    const cleanValues = teamRecord
      ? { ...initialValues, ...teamRecord }
      : initialValues
    setName(cleanValues.name)
    setVisibility(cleanValues.visibility)
    setTeamType(cleanValues.teamType)
    setShowCustomTeamType(cleanValues.teamType === TeamType.CUSTOM)
    setCustomTeamType(cleanValues.customTeamType)
    setDescription(cleanValues.description)
    setErrors({})
  }
  const [teamRecord, setTeamRecord] = React.useState(team)
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Team, idProp) : team
      setTeamRecord(record)
    }
    queryData()
  }, [idProp, team])
  React.useEffect(resetStateValues, [teamRecord])
  const validations = {
    name: [{ type: "Required" }],
    visibility: [{ type: "Required" }],
    teamType: [{ type: "Required" }],
    customTeamType: [],
    description: [{ type: "Required" }],
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
          name,
          searchName: name.toLowerCase(),
          visibility,
          teamType,
          customTeamType,
          description,
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
            Team.copyOf(teamRecord, (updated) => {
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
      {...getOverrideProps(overrides, "TeamUpdateForm")}
      {...rest}
    >
      <TextField
        direction="row"
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              name: value,
              searchName: name.toLowerCase(),
              visibility,
              teamType,
              customTeamType,
              description,
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
      <RadioGroupField
        direction="row"
        label="Visibility"
        name="visibility"
        isReadOnly={false}
        isRequired={true}
        defaultValue={visibility}
        value={visibility}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              name,
              searchName: name.toLowerCase(),
              visibility: value,
              teamType,
              customTeamType,
              description,
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
      <RadioGroupField
        direction="row"
        label="Team type"
        name="teamType"
        isReadOnly={false}
        isRequired={true}
        defaultValue={teamType}
        value={teamType}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              name,
              searchName: name.toLowerCase(),
              visibility,
              teamType: value,
              customTeamType,
              description,
            }
            const result = onChange(modelFields)
            value = result?.teamType ?? value
          }
          if (errors.teamType?.hasError) {
            runValidationTasks("teamType", value)
          }
          setTeamType(value)
          setShowCustomTeamType(value === TeamType.CUSTOM)
        }}
        onBlur={() => runValidationTasks("teamType", teamType)}
        errorMessage={errors.teamType?.errorMessage}
        hasError={errors.teamType?.hasError}
        {...getOverrideProps(overrides, "teamType")}
      >
        <Radio
          children="Team"
          value="TEAM"
          {...getOverrideProps(overrides, "teamTypeRadio0")}
        ></Radio>
        <Radio
          children="Band"
          value="BAND"
          {...getOverrideProps(overrides, "teamTypeRadio1")}
        ></Radio>
        <Radio
          children="Group"
          value="GROUP"
          {...getOverrideProps(overrides, "teamTypeRadio2")}
        ></Radio>
        <Radio
          children="Custom"
          value="CUSTOM"
          {...getOverrideProps(overrides, "teamTypeRadio3")}
        ></Radio>
      </RadioGroupField>
      <TextField
        display={showCustomTeamType ? "block" : "none"}
        label="Custom team type"
        isRequired={false}
        isReadOnly={false}
        value={customTeamType}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              name,
              searchName: name.toLowerCase(),
              visibility,
              teamType,
              customTeamType: value,
              description,
            }
            const result = onChange(modelFields)
            value = result?.customTeamType ?? value
          }
          if (errors.customTeamType?.hasError) {
            runValidationTasks("customTeamType", value)
          }
          setCustomTeamType(value)
        }}
        onBlur={() => runValidationTasks("customTeamType", customTeamType)}
        errorMessage={errors.customTeamType?.errorMessage}
        hasError={errors.customTeamType?.hasError}
        {...getOverrideProps(overrides, "customTeamType")}
      ></TextField>
      <TextAreaField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              name,
              searchName: name.toLowerCase(),
              visibility,
              teamType,
              customTeamType,
              description: value,
            }
            const result = onChange(modelFields)
            value = result?.description ?? value
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value)
          }
          setDescription(value)
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
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
          isDisabled={!(idProp || team)}
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
            children="Save"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || team) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  )
}
