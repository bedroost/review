import React from 'react';

const RatingsCheckIn = props => (
  <div className="category-stars">

    <div>
      <span>Check-in</span>
    </div>

    <div className="stars">
      <span>{props.check_in}</span>
    </div>

  </div>
);

export default RatingsCheckIn;
