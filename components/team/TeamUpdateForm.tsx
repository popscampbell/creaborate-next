import {
  Button,
  Flex,
  Grid,
  Radio,
  RadioGroupField,
  TextAreaField,
  TextField
} from "@aws-amplify/ui-react"
import { getOverrideProps } from "@aws-amplify/ui-react/internal"
import { DataStore } from "aws-amplify"
import * as React from "react"
import { Team, TeamType, TeamVisibility } from "src/models"
import { fetchByPath, validateField } from "ui-components/utils"

export default function TeamUpdateForm(props: any) {
  const {id: idProp, team, onSuccess, onError, onSubmit, onCancel, onValidate, onChange, overrides, ...rest } = props

  const initialValues: {
    name: string,
    visibility: TeamVisibility,
    teamType: TeamType,
    customTeamType: string,
    description: string
  } = {
    name: "",
    visibility: TeamVisibility.PUBLIC,
    teamType: TeamType.TEAM,
    customTeamType: "",
    description: "",
  }

  const validations: { [key: string]: any[]} = {
    name: [{ type: "Required" }],
    visibility: [{ type: "Required" }],
    teamType: [{ type: "Required" }],
    customTeamType: [],
    description: [{ type: "Required" }],
  }

  const [ name, setName ] = React.useState(initialValues.name)
  const [ visibility, setVisibility ] = React.useState(initialValues.visibility)
  const [ teamType, setTeamType ] = React.useState(initialValues.teamType)
  const [ showCustomTeamType, setShowCustomTeamType ] = React.useState(false)
  const [ customTeamType, setCustomTeamType ] = React.useState(initialValues.customTeamType)
  const [ description, setDescription ] = React.useState(initialValues.description)
  const [ errors, setErrors ] = React.useState<any>({})
  const [ teamRecord, setTeamRecord ] = React.useState(team)

  React.useEffect(() => {
    async function queryData() {
      const record = idProp ? await DataStore.query(Team, idProp) : team
      setTeamRecord(record)
    }

    queryData()
  }, [idProp, team])

  React.useEffect(resetStateValues, [ teamRecord ])

  function resetStateValues() {
    const cleanValues = teamRecord
      ? { ...initialValues, ...teamRecord }
      : initialValues

    setName( cleanValues.name )
    setVisibility(cleanValues.visibility)
    setTeamType(cleanValues.teamType)
    setShowCustomTeamType(cleanValues.teamType === TeamType.CUSTOM)
    setCustomTeamType(cleanValues.customTeamType)
    setDescription(cleanValues.description)
    setErrors({})
  }

  async function runValidationTasks(fieldName: string, currentValue: any, getDisplayValue?: (value: any) => string) {
    const value = getDisplayValue ? getDisplayValue(currentValue) : currentValue
    let validationResponse = validateField(currentValue, validations[fieldName])
    const customValidator = fetchByPath(onValidate, fieldName)

    if ( customValidator ) {
      validationResponse = await customValidator(currentValue, validationResponse)
    }

    setErrors((errors: any) => ( { ...errors, [ fieldName ]: validationResponse } ) )
    return validationResponse
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    let modelFields: { [key: string]: any} = {
      name,
      searchName: name.toLowerCase(),
      visibility,
      teamType,
      customTeamType,
      description,
    }

    const validationResponses = await Promise.all(
      Object.keys(validations).reduce<any[]>((promises, fieldName) => {
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
    } catch (err: any) {
      if (onError) {
        onError(modelFields, err.message)
      }
    }
  }

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    let { value } = e.target

    if ( onChange ) {
      const modelFields = {
        name: value,
        searchName: name.toLowerCase(),
        visibility,
        teamType,
        customTeamType,
        description,
      }

      const result = onChange( modelFields )
      value = result?.name ?? value
    }

    if ( errors.name?.hasError ) {
      runValidationTasks("name", value)
    }

    setName( value )
  }

  function handleChangeVisibility(e: React.ChangeEvent<HTMLInputElement>) {
    let { value } = e.target

    if ( onChange ) {
      const modelFields = {
        name,
        searchName: name.toLowerCase(),
        visibility: value,
        teamType,
        customTeamType,
        description,
      }

      const result = onChange( modelFields )
      value = result?.visibility ?? value
    }

    if (errors.visibility?.hasError) {
      runValidationTasks("visibility", value)
    }

    setVisibility( value as TeamVisibility )
  }

  function handleTeamTypeChange(e: React.ChangeEvent<HTMLInputElement>) {
    let { value } = e.target

    if ( onChange ) {
      const modelFields = {
        name,
        searchName: name.toLowerCase(),
        visibility,
        teamType: value,
        customTeamType,
        description,
      }

      const result = onChange( modelFields )
      value = result?.teamType ?? value
    }

    if ( errors.teamType?.hasError ) {
      runValidationTasks("teamType", value)
    }

    setTeamType( value as TeamType )
    setShowCustomTeamType(value === TeamType.CUSTOM)
  }

  function handleChangeCustomTeamType(e: React.ChangeEvent<HTMLInputElement>) {
    let { value } = e.target

    if ( onChange ) {
      const modelFields = {
        name,
        searchName: name.toLowerCase(),
        visibility,
        teamType,
        customTeamType: value,
        description,
      }

      const result = onChange( modelFields )
      value = result?.customTeamType ?? value
    }

    if ( errors.customTeamType?.hasError ) {
      runValidationTasks("customTeamType", value)
    }

    setCustomTeamType( value )
  }

  function handleChangeDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
    let { value } = e.target

    if ( onChange ) {
      const modelFields = {
        name,
        searchName: name.toLowerCase(),
        visibility,
        teamType,
        customTeamType,
        description: value,
      }

      const result = onChange( modelFields )
      value = result?.description ?? value
    }

    if ( errors.description?.hasError ) {
      runValidationTasks("description", value)
    }

    setDescription( value )
  }

  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={handleSubmit}
      {...getOverrideProps(overrides, "TeamUpdateForm")}
      {...rest}
    >
      <TextField
        direction="row"
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={handleChangeName}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      />
      <RadioGroupField
        direction="row"
        label="Visibility"
        name="visibility"
        isReadOnly={false}
        isRequired={true}
        defaultValue={visibility}
        value={visibility}
        onChange={handleChangeVisibility}
        onBlur={() => runValidationTasks("visibility", visibility)}
        errorMessage={errors.visibility?.errorMessage}
        hasError={errors.visibility?.hasError}
        {...getOverrideProps(overrides, "visibility")}
      >
        <Radio children="Private" value="PRIVATE" {...getOverrideProps(overrides, "visibilityRadio0")} />
        <Radio children="Public" value="PUBLIC" {...getOverrideProps(overrides, "visibilityRadio1")} />
      </RadioGroupField>
      <RadioGroupField
        direction="row"
        label="Team type"
        name="teamType"
        isReadOnly={false}
        isRequired={true}
        defaultValue={teamType}
        value={teamType}
        onChange={handleTeamTypeChange}
        onBlur={() => runValidationTasks("teamType", teamType)}
        errorMessage={errors.teamType?.errorMessage}
        hasError={errors.teamType?.hasError}
        {...getOverrideProps(overrides, "teamType")}
      >
        <Radio children="Team" value="TEAM" {...getOverrideProps(overrides, "teamTypeRadio0")} />
        <Radio children="Band" value="BAND" {...getOverrideProps(overrides, "teamTypeRadio1")} />
        <Radio children="Group" value="GROUP" {...getOverrideProps(overrides, "teamTypeRadio2")} />
        <Radio children="Custom" value="CUSTOM" {...getOverrideProps(overrides, "teamTypeRadio3")} />
      </RadioGroupField>
      <TextField
        display={showCustomTeamType ? "block" : "none"}
        label="Custom team type"
        isRequired={false}
        isReadOnly={false}
        value={customTeamType}
        onChange={handleChangeCustomTeamType}
        onBlur={() => runValidationTasks("customTeamType", customTeamType)}
        errorMessage={errors.customTeamType?.errorMessage}
        hasError={errors.customTeamType?.hasError}
        {...getOverrideProps(overrides, "customTeamType")}
      />
      <TextAreaField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={handleChangeDescription}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      />
      <Flex justifyContent="space-between" {...getOverrideProps(overrides, "CTAFlex")}>
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault()
            resetStateValues()
          }}
          isDisabled={!(idProp || team)}
          {...getOverrideProps(overrides, "ResetButton")}
        />
        <Flex gap="15px" {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel()
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          />
          <Button
            children="Save"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || team) ||
              Object.values(errors).some((e: any) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          />
        </Flex>
      </Flex>
    </Grid>
  )
}
