import React from 'react';

const Review = (props) => {

  // js to convert created_at to Month-Year
  console.log(props.created_at);

  return (
    <div className="individual-review">

      <div className="profile">
        <div>
          <img className="img-circle" src={props.avatar} alt={`${props.username} User Profile`} />
        </div>

        <div className="username-date">
          <div className="review-username">{props.username}</div>
          <div className="review-created_at">
            <span>{props.created_at}</span>
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
