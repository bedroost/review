import React from 'react';

const RatingsValue = (props) => {
  const {
    value,
  } = props;

  const widthPercentage = (value / 5) * 100;

  return (
    <div className="category-stars">

      <div className="category">
        <span>Value</span>
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

export default RatingsValue;
