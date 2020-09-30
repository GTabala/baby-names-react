import React, { useState } from "react";

import "./App.css";
import Favorites from "./Favorites";
import Search from "./Search";

const ShowNames = ({ names }) => {
  const [displayedNames, setDisplayedNames] = useState(names);
  const [favorites, setFavorites] = useState([]);
  const [searchNames, setSearchNames] = useState("");

  const checkNames = (e) => {
    setDisplayedNames(
      names
        .filter((item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
        .filter((item) => !favorites.includes(item))
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
      )
    );
  };

  return (
    <div className="names">
      <Search checkNames={checkNames} />
      <Favorites
        clName="favorite"
        favorites={favorites}
        removeFavorites={removeFavorites}
      />
      <Favorites
        clName="favorite"
        favorites={displayedNames}
        removeFavorites={addFavorites}
      />

  
    </div>
  );
};

export default ShowNames;
