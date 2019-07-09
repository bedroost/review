import React from 'react';
import RatingsCategory from './RatingsCategory';
import RatingsStars from './RatingsStars';

const RatingsWell = () => (
  <div>
    <div className="category-stars">
      <RatingsCategory />
      <RatingsStars />
    </div>

    <div className="category-stars">
      <RatingsCategory />
      <RatingsStars />
    </div>

    <div className="category-stars">
      <RatingsCategory />
      <RatingsStars />
    </div>

  </div>
);

export default RatingsWell;
