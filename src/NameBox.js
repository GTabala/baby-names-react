import React from "react";

const NameBox = ({boxClassName, nameArray, addRemove }) => {
 
  return (
    <div className={boxClassName}>
      {nameArray
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ name, sex }) => (
          <p className={sex} key={name} onClick={addRemove}>
            {name}
          </p>
        ))}
    </div>
  );
};

export default NameBox;
