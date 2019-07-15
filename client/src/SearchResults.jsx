/* eslint-disable quotes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const SearchResults = (props) => {
  const {
    allSearchedReviews,
    handleBackToAllReviews,
    search,
  } = props;

  const numGuests = allSearchedReviews.length;
  const searchSuccess = (
    <div className="searchResults">
      {`${numGuests} guests have mentioned "`}
      <span className="searchTerm">{search}</span>
      {`"`}
    </div>
  );
  const searchFail = (
    <div className="searchResults">
      {`None of our guests have mentioned "`}
      <span className="searchTerm">{search}</span>
      {`"`}
    </div>
  );

  return (
    <div>

      <div className="searchResults-showAllReviews">
        { allSearchedReviews ? searchSuccess : searchFail }
        <div className="showAllReviews">
          <button
            type="button"
            className="showAllReviewsButton"
            onClick={() => handleBackToAllReviews()}
          >
          Back to all reviews
          </button>
        </div>
      </div>

      <div className="summary-border-bottom" />
    </div>
  );
};

export default SearchResults;
