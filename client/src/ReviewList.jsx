import React from 'react';
import Review from './Review';

const ReviewList = (props) => (
  <div>
    {props.reviews.map((review) => {
      return <Review review={review.text}/>
    })}
  </div>
);
export default ReviewList;
