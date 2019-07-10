import React from 'react';

const RatingsLocation = props => (
  <div className="category-stars">

    <div>
      <span>Location</span>
    </div>

    <div className="stars">
      <span>{props.location}</span>
    </div>

  </div>
);

export default RatingsLocation;
