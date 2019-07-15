/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const SearchResults = (props) => {
  const {
    allSearchedReviews,
    handleBackToAllReviews,
    search,
  } = props;

  const numGuests = allSearchedReviews.length;

  return (
    <div>

      <div className="searchResults-showAllReviews">
        <div className="searchResults">
          {`${numGuests} guests have mentioned "`}
          <span className="searchTerm">{search}</span>
          {`"`}
        </div>
        <div className="showAllReviews">
          <button type="button" className="showAllReviewsButton" onClick={() => handleBackToAllReviews()}>Back to all reviews</button>
        </div>
      </div>

      <div className="summary-border-bottom" />
    </div>
  );
};

export default SearchResults;
