import React from 'react';
import RatingsWell from './RatingsWell';

const Ratings = props => (
  <div className="ratings-container">

    <div className="left well">
      <RatingsWell
        accuracy={props.accuracy}
        communication={props.communication}
        cleanliness={props.cleanliness}
      />
    </div>

    <div id="right" className="well">
      <RatingsWell
        location={props.location}
        check_in={props.check_in}
        value={props.value}
      />
    </div>

  </div>
);

export default Ratings;
