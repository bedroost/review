/* eslint-disable quotes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from '../dist/style.css';

const SearchResults = (props) => {
  const {
    allSearchedReviews,
    handleBackToAllReviews,
    search,
  } = props;

  const numGuests = allSearchedReviews.length;
  const searchSuccess = (
    <div className={styles.searchResults}>
      {`${numGuests} guests have mentioned "`}
      <span className={styles.searchTerm}>{search}</span>
      {`"`}
    </div>
  );
  const searchFail = (
    <div className={styles.searchResults}>
      {`None of our guests have mentioned "`}
      <span className={styles.searchTerm}>{search}</span>
      {`"`}
    </div>
  );

  return (
    <div>

      <div className={styles.searchresultsShowallreviews}>
        { allSearchedReviews ? searchSuccess : searchFail }
        <div className={styles.showAllReviews}>
          <button
            type="button"
            className={styles.showAllReviewsButton}
            onClick={() => handleBackToAllReviews()}
          >
          Back to all reviews
          </button>
        </div>
      </div>

      <div className={styles.summaryBorderBottom} />
    </div>
  );
};

export default SearchResults;
