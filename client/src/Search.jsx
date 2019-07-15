import React from 'react';
import styles from '../dist/style.css';

const Search = (props) => {
  const {
    handleSearchInput,
    handleEnterPress,
    search,
    handleBackToAllReviews,
  } = props;

  return (
    <div className={styles.spyglassSearchinputClearButton}>

      <div className={styles.spyglass}>
        <i className="material-icons">search</i>
      </div>

      <div className={styles.searchInput}>
        <input
          className={styles.searchInputField}
          type="text"
          id="name"
          placeholder="Search reviews"
          value={search || ''}
          onChange={e => handleSearchInput(e)}
          onKeyPress={e => handleEnterPress(e)}
        />
        {search !== null
          && (
            <div className={styles.clearDiv}>
              <button type="button" className={styles.clearButton} onClick={() => handleBackToAllReviews()}>
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
