import React from 'react';
import moment from 'moment';

const Response = (props) => {

  // js to convert created_at to Month-Year
  const timestamp = props.responseCreatedAt;
  const formattedDate = moment(timestamp).format('MMMM YYYY');

  return (
    <div className="response-container">
      <div className="img-response">
        <img className="img-circle-response" src={`${props.responseAvatar}`} alt={`${props.responseUsername} User Profile`} />
      </div>

      <div className="response-text-container">
        <div className="response-username">
          {`Response from ${props.responseUsername}`}
        </div>
        <div className="response-text">{props.responseText}</div>
        <div className="response-created_at">{formattedDate}</div>
      </div>
    </div>
  )
};

export default Response;
