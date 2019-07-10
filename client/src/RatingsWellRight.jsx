import React from 'react';
import RatingsLocation from './RatingsLocation';
import RatingsCheckIn from './RatingsCheckIn';
import RatingsValue from './RatingsValue';

const RatingsWellRight = props => (
  <div>

    <div>
      <RatingsLocation location={props.location} />
    </div>

    <div>
      <RatingsCheckIn check_in={props.check_in} />
    </div>

    <div>
      <RatingsValue value={props.value} />
    </div>

  </div>
);

export default RatingsWellRight;
