import React from "react";

const Search = ({checkNames}) => {
 
  return (
    <form className="form">
      <input
        type="text"
        id="chooseName"
        className="form-control"
        placeholder="Choose name"
        onChange={checkNames}
      />
    </form>
  );
};

export default Search;
