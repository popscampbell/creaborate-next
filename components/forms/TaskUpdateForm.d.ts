/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Task } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TaskUpdateFormInputValues = {
    teamId?: string;
    name?: string;
    searchName?: string;
    description?: string;
    searchDescription?: string;
    dueDate?: string;
    status?: string;
    priority?: string;
    completedByUsername?: string;
    completedDate?: string;
    ownerUsername?: string;
    startDate?: string;
};
export declare type TaskUpdateFormValidationValues = {
    teamId?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    searchName?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    searchDescription?: ValidationFunction<string>;
    dueDate?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    priority?: ValidationFunction<string>;
    completedByUsername?: ValidationFunction<string>;
    completedDate?: ValidationFunction<string>;
    ownerUsername?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskUpdateFormOverridesProps = {
    TaskUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    teamId?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    searchName?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    searchDescription?: PrimitiveOverrideProps<TextFieldProps>;
    dueDate?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    priority?: PrimitiveOverrideProps<SelectFieldProps>;
    completedByUsername?: PrimitiveOverrideProps<TextFieldProps>;
    completedDate?: PrimitiveOverrideProps<TextFieldProps>;
    ownerUsername?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TaskUpdateFormProps = React.PropsWithChildren<{
    overrides?: TaskUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    task?: Task;
    onSubmit?: (fields: TaskUpdateFormInputValues) => TaskUpdateFormInputValues;
    onSuccess?: (fields: TaskUpdateFormInputValues) => void;
    onError?: (fields: TaskUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TaskUpdateFormInputValues) => TaskUpdateFormInputValues;
    onValidate?: TaskUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TaskUpdateForm(props: TaskUpdateFormProps): React.ReactElement;
