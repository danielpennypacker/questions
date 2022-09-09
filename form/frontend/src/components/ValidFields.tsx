import React, { useState } from "react";
import {
  TextField as MuiTextField,
  Typography,
  FormGroup,
} from "@mui/material";
import { styled } from "@mui/system";
import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";
type TextTypes = "password" | "text";

const ErrorText = styled("span")((props) => ({
  color: props.theme.palette.error.main,
}));

const ErrorSpacer = styled("span")((props) => ({
  color: props.theme.palette.error.main,
}));

const SpacedFormGroup = styled(FormGroup)({
  marginTop: "1rem",
});

interface TextFieldProps<Type> {
  label: string;
  name: keyof Type;
  register: any;
  customErrorMessage?: string;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  required?: boolean;
  type?: TextTypes;
  onFocus?: () => void;
  onBlur?: () => void;
}

export function TextField<Type>({
  register,
  errors,
  name,
  required,
  customErrorMessage,
  label,
  type,
  onFocus,
  onBlur,
}: TextFieldProps<Type>) {
  let errorMessage;
  let errorType = errors?.type;
  if (errorType === "required") {
    errorMessage = "Required";
  }

  if (customErrorMessage) {
    errorMessage = customErrorMessage;
  }

  const [currentType, setCurrentType] = useState<TextTypes>(type || "text");

  return (
    <SpacedFormGroup>
      <MuiTextField
        {...register(name, {
          required,
        })}
        onBlur={onBlur}
        onFocus={onFocus}
        type={currentType}
        error={!!errors || !!customErrorMessage}
        label={label}
        variant="standard"
      />
      {errorMessage && (
        <ErrorText>
          <Typography variant="subtitle2">{errorMessage}</Typography>{" "}
        </ErrorText>
      )}
      {!errorMessage && <Typography variant="subtitle2">&nbsp;</Typography>}
    </SpacedFormGroup>
  );
}
