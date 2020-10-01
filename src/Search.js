import React from "react";

const Search = ({ checkNames, chooseSex }) => {
  return (
    <form className="form">
      <input
        type="text"
        id="chooseName"
        className="form-control"
        placeholder="Search for a name..."
        onChange={checkNames}
      />
      <div>
        <input type="radio" id="chooseSex1" value="u" name="sex" onChange={chooseSex} />
        <label for="chooseSex1">unisex</label>
        <input type="radio" id="chooseSex2" value="f" name="sex" onChange={chooseSex} />
        <label for="chooseSex1">female</label>
        <input type="radio" id="chooseSex3" value="m" name="sex" onChange={chooseSex} />
        <label for="chooseSex1">male</label>
      </div>
    </form>
  );
};

export default Search;
