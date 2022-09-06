import React from "react";
import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import SignUp from "./containers/SignUp";

import "./App.css";

function App() {
  const styles = {};
  return (
    <div className="App">
      <header className="App-header">
        <div className="Content">
          <SignUp />
        </div>
      </header>
    </div>
  );
}

export default App;
