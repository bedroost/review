import React from 'react';

const Response = props => (
  <div className="response-container">
    <div>
      <img className="img-circle" src={`${props.responseAvatar}`} alt={`${props.responseUsername} User Profile`} />
    </div>
    <div>{`Response from ${props.responseUsername}`}</div>
    <div>{props.responseText}</div>
    <div>Placeholder: response created_at</div>
  </div>
);

export default Response;
