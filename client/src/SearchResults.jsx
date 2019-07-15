/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const SearchResults = () => (
  <div>

    <div className="searchResults-showAllReviews">
      <div className="searchResults">
        8 guests have mentioned "
        <span className="searchTerm">searchterm</span>
        "
      </div>
      <div className="showAllReviews">
        <button type="button" className="showAllReviewsButton">Back to all reviews</button>
      </div>
    </div>

    <div className="summary-border-bottom" />
  </div>
);

export default SearchResults;
