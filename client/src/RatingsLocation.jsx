import React from 'react';

const RatingsLocation = (props) => {
  const {
    location,
  } = props;

  const widthPercentage = (location / 5) * 100;

  return (
    <div className="category-stars">

      <div className="category">
        <span>Location</span>
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

export default RatingsLocation;
