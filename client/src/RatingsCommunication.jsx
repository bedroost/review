import React from 'react';

const RatingsCommunication = props => (
  <div className="category-stars">

    <div>
      <span>Communication</span>
    </div>

    <div className="stars">
      <span>{props.communication}</span>
    </div>

  </div>
);

export default RatingsCommunication;
