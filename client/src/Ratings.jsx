import React from 'react';
import RatingsWellLeft from './RatingsWellLeft';
import RatingsWellRight from './RatingsWellRight';

const Ratings = props => (
  <div className="ratings-container">

    <div id="left" className="well">
      <RatingsWellLeft
        accuracy={props.ratings.accuracy}
        communication={props.ratings.communication}
        cleanliness={props.ratings.cleanliness}
      />
    </div>

    <div id="right" className="well">
      <RatingsWellRight
        location={props.ratings.location}
        check_in={props.ratings.check_in}
        value={props.ratings.value}
      />
    </div>

  </div>
);

export default Ratings;
