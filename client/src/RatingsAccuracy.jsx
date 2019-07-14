import React from 'react';

const RatingsAccuracy = () => (
  <div className="category-stars">

    <div className="category">
      <span>Accuracy</span>
    </div>

    <div className="stars" style={{ width: '100%' }}>
      { /* <span>{props.accuracy}</span> */ }
      { /* <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span>
      <span className="fas fa-star"></span> */ }
      <div className="stars-top">
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
);

export default RatingsAccuracy;
