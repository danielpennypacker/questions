import React from 'react';
import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import SignUpForm from './components/SignUpForm';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        Hello!. 
        <SignUpForm />
      </header>
    </div>
  );
}

export default App;
