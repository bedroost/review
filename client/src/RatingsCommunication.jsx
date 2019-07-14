import React from 'react';

const RatingsCommunication = (props) => {
  const {
    communication,
  } = props;

  const widthPercentage = (communication / 5) * 100;

  return (
    <div className="category-stars">

      <div className="category">
        <span>Communication</span>
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

export default RatingsCommunication;
