import React from 'react';

const Search = (props) => {
  const {
    handleSearchInput,
    handleEnterPress,
    search,
    handleBackToAllReviews,
  } = props;

  return (
    <div className="spyglass-searchInput-clearButton">

      <div className="spyglass">
        <i className="material-icons">search</i>
      </div>

      <div className="searchInput">
        <input
          className="searchInputField"
          type="text"
          id="name"
          placeholder="Search reviews"
          value={search || ''}
          onChange={e => handleSearchInput(e)}
          onKeyPress={e => handleEnterPress(e)}
        />
        {search !== null
          && (
            <div className="clearDiv">
              <button type="button" className="clearButton" onClick={() => handleBackToAllReviews()}>
                <div>✕</div>
              </button>
            </div>
          )
        }
      </div>

    </div>
  );
};

export default Search;
