import React from 'react';
import styles from '../dist/style.css';

const RatingsValue = (props) => {
  const {
    value,
  } = props;

  const widthPercentage = (value / 5) * 100;

  return (
    <div className={styles.categoryStars}>

      <div className={styles.category}>
        <span>Value</span>
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

export default RatingsValue;
