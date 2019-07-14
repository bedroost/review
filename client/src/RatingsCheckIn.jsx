/* eslint-disable camelcase */
import React from 'react';

const RatingsCheckIn = (props) => {
  const {
    check_in,
  } = props;

  const widthPercentage = (check_in / 5) * 100;

  return (
    <div className="category-stars">

      <div className="category">
        <span>Check-in</span>
      </div>

      <div className="stars-container">
        <div className="stars">
          <div className="stars-top" style={{ width: `${widthPercentage}%` }}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <div className="stars-bottom">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RatingsCheckIn;
