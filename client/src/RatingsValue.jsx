import React from 'react';

const RatingsValue = props => (
  <div className="category-stars">

    <div>
      <span>Value</span>
    </div>

    <div className="stars">
      { /* <span>{props.value}</span> */ }
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
    </div>

  </div>
);

export default RatingsValue;
