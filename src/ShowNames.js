import React from "react";

import "./App.css";

const ShowNames = ({ names }) => {
  return (
    <div className="names">
      {names
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ name, sex }) => (
          <p className={sex} key={name}>
            {name}
          </p>
        ))}
      </div>
  );
};

export default ShowNames;
