import React from "react";
import babyNamesData from "./babyNamesData.json";
import "./App.css";
import ShowNames from "./ShowNames";

function App() {
  return (
    <div className="App">
      <ShowNames names={babyNamesData} />
    </div>
  );
}

export default App;
