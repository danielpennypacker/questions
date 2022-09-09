/*
I'm importing files with relative imports
like ""./containers/SignUp";". This works out of the box, and is 
easy to use. There are ways to get absolute-path imports, but I'd 
check with the team which they prefer.
*/
import React from "react";
import SignUp from "./containers/SignUp";

function App() {
  const styles = {};
  return (
    <header className="App-header">
      <div className="Content">
        <SignUp />
      </div>
    </header>
  );
}

export default App;
