import React from 'react';
import moment from 'moment';

const Response = (props) => {

  // js to convert created_at to Month-Year
  const timestamp = props.responseCreatedAt;
  const formattedDate = moment(timestamp).format('MMMM YYYY');

  return (
    <div className="response-container">
      <div>
        <img className="img-circle" src={`${props.responseAvatar}`} alt={`${props.responseUsername} User Profile`} />
      </div>
      <div>{`Response from ${props.responseUsername}`}</div>
      <div>{props.responseText}</div>
      <div>{formattedDate}</div>
    </div>
  )
};

export default Response;
