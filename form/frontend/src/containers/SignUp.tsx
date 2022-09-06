import React from "react";
import SignUpForm from "../components/SignUpForm";
import { styled } from "@mui/system";

const CenterContainer = styled("div")({
  paddingTop: "2rem",
  margin: "0 auto",
  maxWidth: 780,
});

const HeaderLogo = styled("div")({});

const HeaderTitle = styled("h1")({
  fontSize: "3rem",
  textAlign: "center",
  color: "white",
});

function SignUp() {
  return (
    <CenterContainer>
      <HeaderTitle>Login Sample</HeaderTitle>
      <SignUpForm />
    </CenterContainer>
  );
}

export default SignUp;
