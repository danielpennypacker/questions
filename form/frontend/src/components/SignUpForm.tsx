import React from "react";
import { styled, useTheme, Theme } from "@mui/system";
import { SignUpFields } from "../types";
import * as api from "../api";

import { TextField, Button, FormGroup, Typography } from "@mui/material";
import {
  useForm,
  FieldError,
  Merge,
  FieldErrorsImpl,
  FieldValue,
} from "react-hook-form";

const PaddedForm = styled("form")({
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  padding: "2rem 4rem 4rem 4rem",
  width: "60%",
});

const SpacedFormGroup = styled(FormGroup)({
  marginTop: "1rem",
});

const ErrorText = styled("span")((props) => ({
  color: props.theme.palette.error.main,
}));

const TwoCol = styled("div")({
  display: "flex",
});

const FortyCol = styled("div")({
  width: "40%",
  position: "relative",
});

const TransparentBack = styled("div")({
  opacity: 0.5,
  backgroundColor: "grey",
  width: "100%",
  height: "100%",
  position: "absolute",
});

const SpacedButton = styled(Button)({
  marginTop: "1rem",
});

interface TextFieldValidProps<Type> {
  label: string;
  name: keyof Type;
  register: any;
  customErrorMessage?: string;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  required?: boolean;
}
function TextFieldValidated<Type>({
  register,
  errors,
  name,
  required,
  customErrorMessage,
  label,
}: TextFieldValidProps<Type>) {
  let errorMessage;
  let errorType = errors?.type;
  if (errorType === "required") {
    errorMessage = "Required";
  }

  if (customErrorMessage) {
    errorMessage = customErrorMessage;
  }

  return (
    <SpacedFormGroup>
      <TextField
        {...register(name, {
          required,
        })}
        error={!!errors || customErrorMessage}
        label={label}
        defaultValue="lalal"
        variant="standard"
      />
      {errorMessage && (
        <ErrorText>
          <Typography variant="subtitle2">{errorMessage}</Typography>{" "}
        </ErrorText>
      )}
      {!errorMessage && <span>&nbsp;</span>}
    </SpacedFormGroup>
  );
}

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFields>();

  const onSubmit = (vals: SignUpFields) => {
    console.log("submitted", vals);
    const resp = api.login(vals);
    console.log("response", vals);
  };

  return (
    <TwoCol className="SignUpForm">
      <FortyCol>
        <TransparentBack />
        <div>Info</div>
      </FortyCol>
      <PaddedForm onSubmit={handleSubmit(onSubmit)}>
        <TextFieldValidated<SignUpFields>
          required
          label="First Name"
          name="firstName"
          register={register}
          errors={errors.firstName}
        />
        <TextFieldValidated<SignUpFields>
          required
          label="Last Name"
          name="lastName"
          register={register}
          errors={errors.lastName}
        />
        <TextFieldValidated<SignUpFields>
          required
          label="Email"
          name="email"
          register={register}
          errors={errors.email}
        />
        <TextField label="Password" variant="standard" type="password" />
        <SpacedButton type="submit" variant="contained">
          Sign Up
        </SpacedButton>
      </PaddedForm>
    </TwoCol>
  );
}

export default SignUpForm;
