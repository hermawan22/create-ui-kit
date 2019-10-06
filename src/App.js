import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Options from "./views/Options";
import Results from "./views/Results";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Options />
        <Results />
      </div>
    </Router>
  );
};

export default App;
