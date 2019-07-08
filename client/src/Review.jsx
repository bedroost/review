import React from 'react';
import moment from 'moment';

const Review = (props) => {

  // js to convert created_at to Month-Year
  const timestamp = props.created_at
  const formattedDate = moment(timestamp).format('MMMM YYYY');

  return (
    <div className="individual-review">

      <div className="profile">
        <div>
          <img className="img-circle" src={props.avatar} alt={`${props.username} User Profile`} />
        </div>

        <div className="username-date">
          <div className="review-username">{props.username}</div>
          <div className="review-created_at">
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>

      <div className="text-container">
        <div className="review-text">{props.text}</div>
      </div>

      <div className="review-border-bottom" />

    </div>
  )
};

export default Review;
