import React from 'react';
import RatingsWell from './RatingsWell';

const Ratings = () => (
  <div className="ratings-container">

    <div className="left well">
      <RatingsWell />
    </div>

    <div id="right" className="well">
      <RatingsWell />
    </div>

  </div>
);

export default Ratings;
