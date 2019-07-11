import React from 'react';

const Total = props => (
  <div className="total-stars">

    <div className="total-count-reviews">
      <h2>{`${props.reviews.length} Reviews`}</h2>
    </div>

    <div className="totalOverallStars">
      { /* <span className="totalOverallStars">{props.ratings.overall}</span> */ }
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
    </div>

  </div>
);

export default Total;
