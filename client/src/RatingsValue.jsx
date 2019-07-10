import React from 'react';

const RatingsValue = props => (
  <div className="category-stars">

    <div>
      <span>Value</span>
    </div>

    <div className="stars">
      <span>{props.value}</span>
    </div>

  </div>
);

export default RatingsValue;
