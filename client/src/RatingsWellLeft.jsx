import React from 'react';
import RatingsAccuracy from './RatingsAccuracy';
import RatingsCommunication from './RatingsCommunication';
import RatingsCleanliness from './RatingsCleanliness';

const RatingsWellLeft = props => (
  <div>

    <div>
      <RatingsAccuracy accuracy={props.accuracy} />
    </div>

    <div>
      <RatingsCommunication communication={props.communication} />
    </div>

    <div>
      <RatingsCleanliness cleanliness={props.cleanliness} />
    </div>

  </div>
);

export default RatingsWellLeft;
