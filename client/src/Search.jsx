import React from 'react';

const Search = (props) => {
  const {
    handleSearchInput,
    handleEnterPress,
    search,
  } = props;

  // conditionally render if text is present in input field
  // 1. green outline
  // 2. clear text button
  let searchOutline;
  let clearButton;
  // if (!search) {
  //   searchOutline = 'spyglass-searchInput noGreen';
  // } else {
  //   searchOutline = 'spyglass-searchInput withGreen';
  //   clearButton = <button>X</button>
  // }

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
          value={search || ''}
          onChange={e => handleSearchInput(e)}
          onKeyPress={e => handleEnterPress(e)}
        />
        <div>{clearButton}</div>
      </div>

    </div>
  );
};

export default Search;
