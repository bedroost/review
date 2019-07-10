import React from 'react';

const Total = props => (
  <div className="total-stars">

    <div>
      <span id="total-no-reviews">{`${props.reviews.length} Reviews`}</span>
    </div>

    <div className="stars">
      <span>{props.ratings.overall}</span>
    </div>

  </div>
);

export default Total;
