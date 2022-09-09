/*
If a page has many ajax actions, then I'll put them in a "container" component like this one.
A container is also similar to a "page" of an app. Since the only ajax action I have is 
submitting the signup form, I let it in the SignUpForm component.
*/
import React, { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const CenterContainer = styled("div")({
  margin: "0 auto",
  maxWidth: 780,
});

const HeaderTitle = styled("h1")({
  paddingTop: 0,
  fontSize: "3rem",
  textAlign: "center",
  color: "white",
});

const CompleteBox = styled("div")({
  padding: "2rem",
  backgroundColor: "white",
  borderRadius: "1rem",
  height: "500px",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
});

function SignUp() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  return (
    <CenterContainer>
      <HeaderTitle>Login Sample</HeaderTitle>
      {!formSubmitted && <SignUpForm setFormSubmitted={setFormSubmitted} />}

      {formSubmitted && (
        <CompleteBox>
          <Typography variant="h3">Complete :)</Typography>
        </CompleteBox>
      )}
    </CenterContainer>
  );
}

export default SignUp;
