/*
This is the main component that actual handles the actions 
and ajax for the form. 
*/
import React, { useState } from "react";
import { styled } from "@mui/system";
import { SignUpFields } from "../types";
import { TextField } from "./ValidFields";
import * as api from "../api";

import { Button, List, ListItem } from "@mui/material";
import { useForm } from "react-hook-form";

/* 
Since I was using material, I tried to stick to their "styled components"
convention. I also really like normal css and things like tailwind-css.
*/
const TwoCol = styled("div")({
  display: "flex",
  marginBottom: "3rem",
});
const LeftCol = styled("div")({
  width: "40%",
  position: "relative",
});
const LeftColContent = styled("div")({
  padding: "2rem",
});
const RightCol = styled("div")({
  width: "60%",
  borderRadius: "0 1rem 1rem 0",
  backgroundColor: "white",
  padding: "2rem",
});
const TransparentBack = styled("div")({
  borderRadius: "1rem 0 0 1rem",
  opacity: 0.5,
  zIndex: -1,
  backgroundColor: "grey",
  width: "100%",
  height: "100%",
  position: "absolute",
});
const SpacedButton = styled(Button)({
  marginTop: "1rem",
});

interface SignUpFormProps {
  setFormSubmitted: (newVal: boolean) => void;
}

function SignUpForm({ setFormSubmitted }: SignUpFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFields>();

  // State for storing errors from the server.
  const [backendErrors, setBackendErrors] = useState<SignUpFields>({});

  const onSubmit = (vals: SignUpFields) => {
    const resp = api.login(vals).then(
      (resp) => {
        // State function from the SignUp container.
        setFormSubmitted(true);
      },
      (errorResp) => {
        setBackendErrors(errorResp["errors"]);
      }
    );
  };

  return (
    <TwoCol className="SignUpForm">
      <LeftCol>
        <TransparentBack />
        <LeftColContent>
          <List>
            <ListItem>What a nice code sample!</ListItem>
          </List>
        </LeftColContent>
      </LeftCol>
      <RightCol>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Unless it's a really long list, I prefer to write out html like this instead of looping 
          over some kind of object. (For example [{label: "First Name", field: "first_name"} ..] ).
            If these need to get rearagned or further customized, it'll be nice that they're alreay written out.
          */}
          <TextField<SignUpFields>
            required
            label="First Name"
            name="first_name"
            register={register}
            errors={errors.first_name}
            customErrorMessage={backendErrors.first_name}
          />
          <TextField<SignUpFields>
            required
            label="Last Name"
            name="last_name"
            register={register}
            errors={errors.last_name}
            customErrorMessage={backendErrors.last_name}
          />
          <TextField<SignUpFields>
            required
            label="Email"
            name="email"
            register={register}
            errors={errors.email}
            customErrorMessage={backendErrors.email}
          />

          <TextField<SignUpFields>
            required
            label="Phone"
            name="phone"
            register={register}
            errors={errors.phone}
            customErrorMessage={backendErrors.phone}
          />
          <SpacedButton type="submit" variant="contained">
            Sign Up
          </SpacedButton>
        </form>
      </RightCol>
    </TwoCol>
  );
}

export default SignUpForm;
