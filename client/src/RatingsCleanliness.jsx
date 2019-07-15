import React from 'react';
import styles from '../dist/style.css';

const RatingsCleanliness = (props) => {
  const {
    cleanliness,
  } = props;

  const widthPercentage = (cleanliness / 5) * 100;

  return (
    <div className={styles.categoryStars}>

      <div className={styles.category}>
        <span>Cleanliness</span>
      </div>

      <div className={styles.starsContainer}>
        <div className={styles.stars}>
          <div className={styles.starsTop} style={{ width: `${widthPercentage}%` }}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <div className={styles.starsBottom}>
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

export default RatingsCleanliness;
