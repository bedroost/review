/* eslint-disable camelcase */
import React from 'react';
import RatingsWellLeft from './RatingsWellLeft';
import RatingsWellRight from './RatingsWellRight';

const Ratings = (props) => {
  const {
    ratings: {
      communication, accuracy, cleanliness, location, check_in, value,
    },
  } = props;

  return (
    <div className="ratings-container">

      <div id="left" className="well">
        <RatingsWellLeft
          accuracy={accuracy}
          communication={communication}
          cleanliness={cleanliness}
        />
      </div>

      <div id="right" className="well">
        <RatingsWellRight
          location={location}
          check_in={check_in}
          value={value}
        />
      </div>

    </div>
  );
};

export default Ratings;
