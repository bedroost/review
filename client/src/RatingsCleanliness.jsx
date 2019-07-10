import React from 'react';

const RatingsCleanliness = props => (
  <div className="category-stars">

    <div>
      <span>Cleanliness</span>
    </div>

    <div className="stars">
      <span>{props.cleanliness}</span>
    </div>

  </div>
);

export default RatingsCleanliness;
