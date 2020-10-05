import React from "react";
import babyNamesData from "./babyNamesData.json";
import "./App.css";
import ShowNames from "./ShowNames";

function App() {
  // const babyNamesData = [
  //   {
  //     id: 185,
  //     name: "Sulaiman",
  //     sex: "m",
  //   },
  //   {
  //     id: 186,
  //     name: "Ozella",
  //     sex: "f",
  //   },
  //   {
  //     id: 18,
  //     name: "Bultain",
  //     sex: "m",
  //   },
  //   {
  //     id: 16,
  //     name: "Bella",
  //     sex: "f",
  //   },
  // ];
  // const favoriteData = [
  //   {
  //     id: 18,
  //     name: "Bultain",
  //     sex: "m",
  //   },
  //   {
  //     id: 16,
  //     name: "Bella",
  //     sex: "f",
  //   },
  // ];

  return (
    <div className="App">
      <ShowNames names={babyNamesData} />
    </div>
  );
}

export default App;
