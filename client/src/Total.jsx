import React from 'react';

const Total = props => (
  <div className="total-stars">

    <div className="total-count-reviews">
      <span>{`${props.reviews.length} Reviews`}</span>
    </div>

    <div>
      <span className="total-overall-stars">{props.ratings.overall}</span>
    </div>

  </div>
);

export default Total;
