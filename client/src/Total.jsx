import React from 'react';
import styles from '../dist/style.css';

const Total = (props) => {
  const {
    ratings: { overall },
    totalReviews,
  } = props;

  const widthPercentage = (overall / 5) * 100;

  return (
    <div className={styles.totalReviewsTotalStars}>

      <div className={styles.totalReviews}>
        <h2>{`${totalReviews} Reviews`}</h2>
      </div>

      <div className={styles.totalStarsContainer}>
        <div className={styles.totalStars}>
          <div className={styles.totalStarsTop} style={{ width: `${widthPercentage}%` }}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <div className={styles.totalStarsBottom}>
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

export default Total;
