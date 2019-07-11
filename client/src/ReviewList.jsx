import React from 'react';
import ReviewListItem from './ReviewListItem';

const ReviewList = props => (
  <div className="reviewList-container">
    {props.displayedReviews.map(displayedReview => (
      <ReviewListItem
        username={displayedReview.username}
        avatar={displayedReview.avatar}
        created_at={displayedReview.created_at}
        text={displayedReview.text}
        responseUsername={displayedReview.response_username}
        responseAvatar={displayedReview.response_avatar}
        responseText={displayedReview.response_text}
        responseCreatedAt={displayedReview.response_created_at}
      />
    ))}
  </div>
);
export default ReviewList;
