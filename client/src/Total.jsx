import React from 'react';

const Total = props => (
  <div className="total-stars">

    <div className="total-count-reviews">
      <h2>{`${props.reviews.length} Reviews`}</h2>
    </div>

    <div>
      <span className="total-overall-stars">{props.ratings.overall}</span>
    </div>

  </div>
);

export default Total;
