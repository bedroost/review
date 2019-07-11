import React from 'react';

const RatingsCheckIn = props => (
  <div className="category-stars">

    <div>
      <span>Check-in</span>
    </div>

    <div className="stars">
      { /* <span>{props.check_in}</span> */ }
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
    </div>

  </div>
);

export default RatingsCheckIn;
