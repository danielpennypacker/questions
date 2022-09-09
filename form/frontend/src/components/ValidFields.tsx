/*
- I thought this made sense for a module. Similar code around validating inputs could live here.
- I could be argued out of naming this component "TextField", as it's the same as the material component,
but it's a little bit intentional too. 
*/
import React from "react";
import {
  TextField as MuiTextField,
  Typography,
  FormGroup,
} from "@mui/material";
import { styled } from "@mui/system";
import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";

const ErrorText = styled("span")((props) => ({
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
  onFocus?: () => void;
  onBlur?: () => void;
}

// Passing in "Type", makes sure you've got the correct keys for the name and errors.
export function TextField<Type>({
  register,
  errors,
  name,
  required,
  customErrorMessage,
  label,
  onFocus,
  onBlur,
}: TextFieldProps<Type>) {
  let errorMessage;
  let errorType = errors?.type;
  // I'm only checking for "required" on the cliend side so it's easy to see
  // the backend responding with errors too.
  // This could easly be expanded to have lots more error "types".
  if (errorType === "required") {
    errorMessage = "Required";
  }

  if (customErrorMessage) {
    errorMessage = customErrorMessage;
  }

  return (
    <SpacedFormGroup>
      <MuiTextField
        {...register(name, {
          required,
        })}
        onBlur={onBlur}
        onFocus={onFocus}
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
