import React from 'react';

const RatingsCleanliness = (props) => {
  const {
    cleanliness,
  } = props;

  const widthPercentage = (cleanliness / 5) * 100;

  return (
    <div className="category-stars">

      <div className="category">
        <span>Cleanliness</span>
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

export default RatingsCleanliness;
