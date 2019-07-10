import React from 'react';
import ReviewListItem from './ReviewListItem';

const ReviewList = props => (
  <div className="reviewList-container">
    {props.reviews.map(review => (
      <ReviewListItem
        username={review.username}
        avatar={review.avatar}
        created_at={review.created_at}
        text={review.text}
        responseUsername={review.response_username}
        responseAvatar={review.response_avatar}
        responseText={review.response_text}
        responseCreatedAt={review.response_created_at}
      />
    ))}
  </div>
);
export default ReviewList;
