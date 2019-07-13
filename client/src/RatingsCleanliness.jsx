import React from 'react';

const RatingsCleanliness = props => (
  <div className="category-stars">

    <div>
      <span>Cleanliness</span>
    </div>

    <div className="stars">
      { /* <span>{props.cleanliness}</span> */ }
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
    </div>

  </div>
);

export default RatingsCleanliness;
