import React from 'react';

const Search = (props) => {
  const {
    handleSearchInput,
    handleEnterPress,
  } = props;

  return (
    <div className="spyglass-searchInput">

      <div className="spyglass">
        <i className="material-icons">search</i>
      </div>

      <div className="searchInput">
        <input
          type="text"
          id="name"
          placeholder="Search reviews"
          onChange={e => handleSearchInput(e)}
          onKeyPress={e => handleEnterPress(e)}
      />
      </div>

    </div>
  );
};

export default Search;
