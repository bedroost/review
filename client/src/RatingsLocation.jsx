import React from 'react';

const RatingsLocation = props => (
  <div className="category-stars">

    <div>
      <span>Location</span>
    </div>

    <div className="stars">
      { /* <span>{props.location}</span> */ }
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
    </div>

  </div>
);

export default RatingsLocation;
