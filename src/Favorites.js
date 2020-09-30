import React from "react";

const Favorites = ({clName, favorites, removeFavorites }) => {
 
  return (
    <div className={clName}>
      {favorites
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ name, sex }) => (
          <p className={sex} key={name} onClick={removeFavorites}>
            {name}
          </p>
        ))}
    </div>
  );
};

export default Favorites;
