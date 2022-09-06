import React from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { TextField, Button, FormGroup } from "@mui/material";
import { useForm, FieldError, Merge, FieldErrorsImpl } from "react-hook-form";
import { red } from "@mui/material/colors";
import { NONAME } from "dns";

const PaddedForm = styled("form")({
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  padding: "2rem 4rem 4rem 4rem",
  width: "60%",
});

const ErrorText = styled("span")({
  color: "red", // TODO: use a theme variable here.
});

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

const SpacedTextField = styled(TextField)({
  marginTop: "1rem",
});

const SpacedButton = styled(Button)({
  marginTop: "1rem",
});

interface SignUpFormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

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
    <FormGroup>
      <TextField
        {...register(name, {
          required,
        })}
        error={!!errors || customErrorMessage}
        label={label}
        variant="standard"
      />
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      {!errorMessage && <span>&nbsp;</span>}
    </FormGroup>
  );
}

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (vals: any) => {
    console.log("submitted", vals);
  };

  console.log(errors);

  return (
    <TwoCol className="SignUpForm">
      <FortyCol>
        <TransparentBack />
        <div>Info</div>
      </FortyCol>
      <PaddedForm onSubmit={handleSubmit(onSubmit)}>
        <TextFieldValidated<SignUpFormFields>
          required
          label="First Name"
          name="firstName"
          register={register}
          errors={errors.firstName}
        />
        <TextFieldValidated<SignUpFormFields>
          required
          label="Last Name"
          name="lastName"
          register={register}
          errors={errors.lastName}
        />
        <TextFieldValidated<SignUpFormFields>
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
