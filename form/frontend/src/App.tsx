import React from "react";
import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { styled } from "@mui/system";

import SignUp from "./containers/SignUp";

const GradiantApp = styled("div")({
  background:
    "linear-gradient(90deg, rgba(159,56,158,1) 20%, rgba(91,0,255,1) 85%)",
  width: "100%",
  height: "100vh",
});

function App() {
  const styles = {};
  return (
    <GradiantApp className="App">
      <header className="App-header">
        <div className="Content">
          <SignUp />
        </div>
      </header>
    </GradiantApp>
  );
}

export default App;
