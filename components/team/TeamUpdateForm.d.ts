/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react"
import { GridProps, RadioGroupFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react"
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal"
import { Team } from "../../src/models"
export declare type ValidationResponse = {
    hasError: boolean
    errorMessage?: string
}
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>
export declare type TeamUpdateFormInputValues = {
    name?: string
    visibility?: string
    teamType?: string
    customTeamType?: string
    description?: string
}
export declare type TeamUpdateFormValidationValues = {
    name?: ValidationFunction<string>
    visibility?: ValidationFunction<string>
    teamType?: ValidationFunction<string>
    customTeamType?: ValidationFunction<string>
    description?: ValidationFunction<string>
}
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>
export declare type TeamUpdateFormOverridesProps = {
    TeamUpdateFormGrid?: PrimitiveOverrideProps<GridProps>
    name?: PrimitiveOverrideProps<TextFieldProps>
    visibility?: PrimitiveOverrideProps<RadioGroupFieldProps>
    teamType?: PrimitiveOverrideProps<RadioGroupFieldProps>
    customTeamType?: PrimitiveOverrideProps<TextFieldProps>
    description?: PrimitiveOverrideProps<TextAreaFieldProps>
} & EscapeHatchProps
export declare type TeamUpdateFormProps = React.PropsWithChildren<{
    overrides?: TeamUpdateFormOverridesProps | undefined | null
} & {
    id?: string
    team?: Team
    onSubmit?: (fields: TeamUpdateFormInputValues) => TeamUpdateFormInputValues
    onSuccess?: (fields: TeamUpdateFormInputValues) => void
    onError?: (fields: TeamUpdateFormInputValues, errorMessage: string) => void
    onCancel?: () => void
    onChange?: (fields: TeamUpdateFormInputValues) => TeamUpdateFormInputValues
    onValidate?: TeamUpdateFormValidationValues
} & React.CSSProperties>
export default function TeamUpdateForm(props: TeamUpdateFormProps): React.ReactElement
