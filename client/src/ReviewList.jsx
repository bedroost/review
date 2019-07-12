/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReviewListItem from './ReviewListItem';

const ReviewList = (props) => {
  const { displayedReviews } = props;

  return (
    <div className="reviewList-container">
      {displayedReviews.map(displayedReview => (
        <ReviewListItem
          key={displayedReview._id}
          username={displayedReview.username}
          avatar={displayedReview.avatar}
          createdAt={displayedReview.created_at}
          text={displayedReview.text}
          hasResponse={displayedReview.hasResponse}
          responseUsername={displayedReview.response_username}
          responseAvatar={displayedReview.response_avatar}
          responseText={displayedReview.response_text}
          responseCreatedAt={displayedReview.response_created_at}
        />
      ))}
    </div>
  );
};
export default ReviewList;
