import React from 'react';
import moment from 'moment';
import styles from '../dist/style.css';

const Response = (props) => {
  const {
    responseCreatedAt,
    responseAvatar,
    responseUsername,
    responseText,
  } = props;

  // js to convert created_at to Month-Year
  const timestamp = responseCreatedAt;
  const formattedDate = moment(timestamp).format('MMMM YYYY');

  return (
    <div className={styles.responseContainer}>
      <div className={styles.imgResponse}>
        <img className={styles.imgCircleResponse} src={`${responseAvatar}`} alt={`${responseUsername} User Profile`} />
      </div>

      <div className={styles.responseTextContainer}>
        <div className={styles.responseUsername}>
          {`Response from ${responseUsername}`}
        </div>
        <div className={styles.responseText}>{responseText}</div>
        <div className={styles.responseCreated_at}>{formattedDate}</div>
      </div>
    </div>
  );
};

export default Response;
