/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TransactionsUpdateFormInputValues = {
    name?: string;
    category?: string;
    amount?: string;
    transactionDate?: string;
    type?: string;
    description?: string;
};
export declare type TransactionsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    amount?: ValidationFunction<string>;
    transactionDate?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransactionsUpdateFormOverridesProps = {
    TransactionsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    transactionDate?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TransactionsUpdateFormProps = React.PropsWithChildren<{
    overrides?: TransactionsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    transactions?: any;
    onSubmit?: (fields: TransactionsUpdateFormInputValues) => TransactionsUpdateFormInputValues;
    onSuccess?: (fields: TransactionsUpdateFormInputValues) => void;
    onError?: (fields: TransactionsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TransactionsUpdateFormInputValues) => TransactionsUpdateFormInputValues;
    onValidate?: TransactionsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TransactionsUpdateForm(props: TransactionsUpdateFormProps): React.ReactElement;
