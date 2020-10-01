import React, { useState } from "react";

import "./App.css";
import NameBox from "./NameBox";
import Search from "./Search";

const ShowNames = ({ names }) => {
  const [displayedNames, setDisplayedNames] = useState(names);
  const [favorites, setFavorites] = useState([]);
  const [searchNames, setSearchNames] = useState("");
  const [sex, setSex] = useState("u");

  const checkNames = (e) => {
    setDisplayedNames(
      names
        .filter((item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
        .filter((item) => !favorites.includes(item))
        .filter((item) => (sex === "u" ? true : item.sex === sex))
    );
    setSearchNames(e.target.value.toLowerCase());
  };

  const addFavorites = (e) => {
    setFavorites(
      favorites.concat(names.filter((item) => item.name === e.target.innerText))
    );

    setDisplayedNames(
      displayedNames.filter((item) => item.name !== e.target.innerText)
    );
  };

  const removeFavorites = (e) => {
    setFavorites(favorites.filter((item) => item.name !== e.target.innerText));
    setDisplayedNames(
      displayedNames.concat(
        names
          .filter((item) => item.name === e.target.innerText)
          .filter((item) => item.name.toLowerCase().includes(searchNames))
          .filter((item) => (sex === "u" ? true : item.sex === sex))
      )
    );
  };
  const chooseSex = (e) => {
    setSex(e.target.value);
    setDisplayedNames(
      names
        .filter((item) =>
          e.target.value === "u" ? true : item.sex === e.target.value
        )
        .filter((item) => !favorites.includes(item))
        .filter((item) => item.name.toLowerCase().includes(searchNames))
    );
  };
  return (
    <div className="names">
      <Search checkNames={checkNames} chooseSex={chooseSex} />
      <NameBox
        boxClassName="favorite"
        nameArray={favorites}
        addRemove={removeFavorites}
      />
      <NameBox
        boxClassName="favorite"
        nameArray={displayedNames}
        addRemove={addFavorites}
      />
    </div>
  );
};

export default ShowNames;
