/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Task } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TaskUpdateForm(props) {
  const {
    id: idProp,
    task,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    teamId: "",
    name: "",
    searchName: "",
    description: "",
    searchDescription: "",
    dueDate: "",
    status: undefined,
    priority: undefined,
    completedByUsername: "",
    completedDate: "",
    ownerUsername: "",
    startDate: "",
  };
  const [teamId, setTeamId] = React.useState(initialValues.teamId);
  const [name, setName] = React.useState(initialValues.name);
  const [searchName, setSearchName] = React.useState(initialValues.searchName);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [searchDescription, setSearchDescription] = React.useState(
    initialValues.searchDescription
  );
  const [dueDate, setDueDate] = React.useState(initialValues.dueDate);
  const [status, setStatus] = React.useState(initialValues.status);
  const [priority, setPriority] = React.useState(initialValues.priority);
  const [completedByUsername, setCompletedByUsername] = React.useState(
    initialValues.completedByUsername
  );
  const [completedDate, setCompletedDate] = React.useState(
    initialValues.completedDate
  );
  const [ownerUsername, setOwnerUsername] = React.useState(
    initialValues.ownerUsername
  );
  const [startDate, setStartDate] = React.useState(initialValues.startDate);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = taskRecord
      ? { ...initialValues, ...taskRecord }
      : initialValues;
    setTeamId(cleanValues.teamId);
    setName(cleanValues.name);
    setSearchName(cleanValues.searchName);
    setDescription(cleanValues.description);
    setSearchDescription(cleanValues.searchDescription);
    setDueDate(cleanValues.dueDate);
    setStatus(cleanValues.status);
    setPriority(cleanValues.priority);
    setCompletedByUsername(cleanValues.completedByUsername);
    setCompletedDate(cleanValues.completedDate);
    setOwnerUsername(cleanValues.ownerUsername);
    setStartDate(cleanValues.startDate);
    setErrors({});
  };
  const [taskRecord, setTaskRecord] = React.useState(task);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Task, idProp) : task;
      setTaskRecord(record);
    };
    queryData();
  }, [idProp, task]);
  React.useEffect(resetStateValues, [taskRecord]);
  const validations = {
    teamId: [{ type: "Required" }],
    name: [{ type: "Required" }],
    searchName: [{ type: "Required" }],
    description: [],
    searchDescription: [],
    dueDate: [],
    status: [{ type: "Required" }],
    priority: [{ type: "Required" }],
    completedByUsername: [],
    completedDate: [],
    ownerUsername: [],
    startDate: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          teamId,
          name,
          searchName,
          description,
          searchDescription,
          dueDate,
          status,
          priority,
          completedByUsername,
          completedDate,
          ownerUsername,
          startDate,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Task.copyOf(taskRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TaskUpdateForm")}
      {...rest}
    >
      <TextField
        label="Team id"
        isRequired={true}
        isReadOnly={false}
        value={teamId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamId: value,
              name,
              searchName,
              description,
              searchDescription,
              dueDate,
              status,
              priority,
              completedByUsername,
              completedDate,
              ownerUsername,
              startDate,
            };
            const result = onChange(modelFields);
            value = result?.teamId ?? value;
          }
          if (errors.teamId?.hasError) {
            runValidationTasks("teamId", value);
          }
          setTeamId(value);
        }}
        onBlur={() => runValidationTasks("teamId", teamId)}
        errorMessage={errors.teamId?.errorMessage}
        hasError={errors.teamId?.hasError}
        {...getOverrideProps(overrides, "teamId")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamId,
              name: value,
              searchName,
              description,
              searchDescription,
              dueDate,
              status,
              priority,
              completedByUsername,
              completedDate,
              ownerUsername,
              startDate,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Search name"
        isRequired={true}
        isReadOnly={false}
        value={searchName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamId,
              name,
              searchName: value,
              description,
              searchDescription,
              dueDate,
              status,
              priority,
              completedByUsername,
              completedDate,
              ownerUsername,
              startDate,
            };
            const result = onChange(modelFields);
            value = result?.searchName ?? value;
          }
          if (errors.searchName?.hasError) {
            runValidationTasks("searchName", value);
          }
          setSearchName(value);
        }}
        onBlur={() => runValidationTasks("searchName", searchName)}
        errorMessage={errors.searchName?.errorMessage}
        hasError={errors.searchName?.hasError}
        {...getOverrideProps(overrides, "searchName")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamId,
              name,
              searchName,
              description: value,
              searchDescription,
              dueDate,
              status,
              priority,
              completedByUsername,
              completedDate,
              ownerUsername,
              startDate,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Search description"
        isRequired={false}
        isReadOnly={false}
        value={searchDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamId,
              name,
              searchName,
              description,
              searchDescription: value,
              dueDate,
              status,
              priority,
              completedByUsername,
              completedDate,
              ownerUsername,
              startDate,
            };
            const result = onChange(modelFields);
            value = result?.searchDescription ?? value;
          }
          if (errors.searchDescription?.hasError) {
            runValidationTasks("searchDescription", value);
          }
          setSearchDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("searchDescription", searchDescription)
        }
        errorMessage={errors.searchDescription?.errorMessage}
        hasError={errors.searchDescription?.hasError}
        {...getOverrideProps(overrides, "searchDescription")}
      ></TextField>
      <TextField
        label="Due date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dueDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamId,
              name,
              searchName,
              description,
              searchDescription,
              dueDate: value,
              status,
              priority,
              completedByUsername,
              completedDate,
              ownerUsername,
              startDate,
            };
            const result = onChange(modelFields);
            value = result?.dueDate ?? value;
          }
          if (errors.dueDate?.hasError) {
            runValidationTasks("dueDate", value);
          }
          setDueDate(value);
        }}
        onBlur={() => runValidationTasks("dueDate", dueDate)}
        errorMessage={errors.dueDate?.errorMessage}
        hasError={errors.dueDate?.hasError}
        {...getOverrideProps(overrides, "dueDate")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamId,
              name,
              searchName,
              description,
              searchDescription,
              dueDate,
              status: value,
              priority,
              completedByUsername,
              completedDate,
              ownerUsername,
              startDate,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Active"
          value="ACTIVE"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Closed"
          value="CLOSED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Archived"
          value="ARCHIVED"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Priority"
        placeholder="Please select an option"
        isDisabled={false}
        value={priority}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamId,
              name,
              searchName,
              description,
              searchDescription,
              dueDate,
              status,
              priority: value,
              completedByUsername,
              completedDate,
              ownerUsername,
              startDate,
            };
            const result = onChange(modelFields);
            value = result?.priority ?? value;
          }
          if (errors.priority?.hasError) {
            runValidationTasks("priority", value);
          }
          setPriority(value);
        }}
        onBlur={() => runValidationTasks("priority", priority)}
        errorMessage={errors.priority?.errorMessage}
        hasError={errors.priority?.hasError}
        {...getOverrideProps(overrides, "priority")}
      >
        <option
          children="High"
          value="HIGH"
          {...getOverrideProps(overrides, "priorityoption0")}
        ></option>
        <option
          children="Medium"
          value="MEDIUM"
          {...getOverrideProps(overrides, "priorityoption1")}
        ></option>
        <option
          children="Low"
          value="LOW"
          {...getOverrideProps(overrides, "priorityoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Completed by username"
        isRequired={false}
        isReadOnly={false}
        value={completedByUsername}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamId,
              name,
              searchName,
              description,
              searchDescription,
              dueDate,
              status,
              priority,
              completedByUsername: value,
              completedDate,
              ownerUsername,
              startDate,
            };
            const result = onChange(modelFields);
            value = result?.completedByUsername ?? value;
          }
          if (errors.completedByUsername?.hasError) {
            runValidationTasks("completedByUsername", value);
          }
          setCompletedByUsername(value);
        }}
        onBlur={() =>
          runValidationTasks("completedByUsername", completedByUsername)
        }
        errorMessage={errors.completedByUsername?.errorMessage}
        hasError={errors.completedByUsername?.hasError}
        {...getOverrideProps(overrides, "completedByUsername")}
      ></TextField>
      <TextField
        label="Completed date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={completedDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamId,
              name,
              searchName,
              description,
              searchDescription,
              dueDate,
              status,
              priority,
              completedByUsername,
              completedDate: value,
              ownerUsername,
              startDate,
            };
            const result = onChange(modelFields);
            value = result?.completedDate ?? value;
          }
          if (errors.completedDate?.hasError) {
            runValidationTasks("completedDate", value);
          }
          setCompletedDate(value);
        }}
        onBlur={() => runValidationTasks("completedDate", completedDate)}
        errorMessage={errors.completedDate?.errorMessage}
        hasError={errors.completedDate?.hasError}
        {...getOverrideProps(overrides, "completedDate")}
      ></TextField>
      <TextField
        label="Owner username"
        isRequired={false}
        isReadOnly={false}
        value={ownerUsername}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamId,
              name,
              searchName,
              description,
              searchDescription,
              dueDate,
              status,
              priority,
              completedByUsername,
              completedDate,
              ownerUsername: value,
              startDate,
            };
            const result = onChange(modelFields);
            value = result?.ownerUsername ?? value;
          }
          if (errors.ownerUsername?.hasError) {
            runValidationTasks("ownerUsername", value);
          }
          setOwnerUsername(value);
        }}
        onBlur={() => runValidationTasks("ownerUsername", ownerUsername)}
        errorMessage={errors.ownerUsername?.errorMessage}
        hasError={errors.ownerUsername?.hasError}
        {...getOverrideProps(overrides, "ownerUsername")}
      ></TextField>
      <TextField
        label="Start date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={startDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamId,
              name,
              searchName,
              description,
              searchDescription,
              dueDate,
              status,
              priority,
              completedByUsername,
              completedDate,
              ownerUsername,
              startDate: value,
            };
            const result = onChange(modelFields);
            value = result?.startDate ?? value;
          }
          if (errors.startDate?.hasError) {
            runValidationTasks("startDate", value);
          }
          setStartDate(value);
        }}
        onBlur={() => runValidationTasks("startDate", startDate)}
        errorMessage={errors.startDate?.errorMessage}
        hasError={errors.startDate?.hasError}
        {...getOverrideProps(overrides, "startDate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || task)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || task) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
