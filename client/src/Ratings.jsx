/* eslint-disable camelcase */
import React from 'react';
import RatingsWellLeft from './RatingsWellLeft';
import RatingsWellRight from './RatingsWellRight';
import styles from '../dist/style.css';

const Ratings = (props) => {
  const {
    ratings: {
      communication, accuracy, cleanliness, location, check_in, value,
    },
  } = props;

  return (
    <div className={styles.ratingsContainer}>

      <div id={styles.left} className={styles.well}>
        <RatingsWellLeft
          accuracy={accuracy}
          communication={communication}
          cleanliness={cleanliness}
        />
      </div>

      <div id={styles.right} className={styles.well}>
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
