import React from 'react';

const Search = (props) => {
  const {
    handleSearchInput,
    handleEnterPress,
    search,
  } = props;

  // conditionally render green outline if text is present in input field
  let searchOutline;
  if (!search) {
    searchOutline = 'spyglass-searchInput noGreen';
  } else {
    searchOutline = 'spyglass-searchInput withGreen';
  }

  return (
    <div className={`${searchOutline}`}>

      <div className="spyglass">
        <i className="material-icons">search</i>
      </div>

      <div className="searchInput">
        <input
          type="text"
          id="name"
          placeholder="Search reviews"
          value={search}
          onChange={e => handleSearchInput(e)}
          onKeyPress={e => handleEnterPress(e)}
        />
      </div>

    </div>
  );
};

export default Search;
