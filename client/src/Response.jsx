import React from 'react';
import moment from 'moment';

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
    <div className="response-container">
      <div className="img-response">
        <img className="img-circle-response" src={`${responseAvatar}`} alt={`${responseUsername} User Profile`} />
      </div>

      <div className="response-text-container">
        <div className="response-username">
          {`Response from ${responseUsername}`}
        </div>
        <div className="response-text">{responseText}</div>
        <div className="response-created_at">{formattedDate}</div>
      </div>
    </div>
  );
};

export default Response;
