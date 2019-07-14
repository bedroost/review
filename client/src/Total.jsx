import React from 'react';

const Total = (props) => {
  const {
    ratings: { overall },
    totalReviews,
  } = props;

  const widthPercentage = (overall / 5) * 100;

  console.log(widthPercentage);
  return (
    <div className="totalReviews-totalStars">

      <div className="totalReviews">
        <h2>{`${totalReviews} Reviews`}</h2>
      </div>

      <div className="totalStars-container">
        <div className="totalStars">
          <div className="totalStars-top" style={{ width: `${widthPercentage}%` }}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <div className="totalStars-bottom">
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

export default Total;
