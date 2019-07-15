import React from 'react';
import moment from 'moment';
import Response from './Response';
import styles from '../dist/style.css';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completeReviewText: false,
    };
    this.handleClickReadMore = this.handleClickReadMore.bind(this);
  }

  handleClickReadMore() {
    this.setState({
      completeReviewText: true,
    });
  }

  render() {
    const {
      avatar,
      username,
      text,
      createdAt,
      responseAvatar,
      responseUsername,
      responseText,
      responseCreatedAt,
      hasResponse,
    } = this.props;

    const {
      completeReviewText,
    } = this.state;

    // js to convert createdAt to Month-Year format
    const timestamp = createdAt;
    const formattedDate = moment(timestamp).format('MMMM YYYY');

    // use conditional rendering to hide second half of long review until "Read more" is clicked
    // if it's a long review (>50 words) render only first 50 words followed by "Read more" button.
    // if "Read more" button is clicked, set state to render the entire text of review
    // else render the whole review (<50 words)
    const splitText = text.split(' ');
    const reviewWordCount = splitText.length;
    const first50Words = splitText.slice(0, 50).join(' ');
    let reviewText;

    if (reviewWordCount > 50) {
      reviewText = (
        <div>
          {`${first50Words}...`}
          <button type="button" className={styles.readMoreButton} onClick={() => this.handleClickReadMore()}>Read more</button>
        </div>
      );
    } else {
      reviewText = first50Words;
    }

    return (
      <div className={styles.reviewContainer}>

        <div className={styles.profile}>

          <div>
            <img className={styles.imgCircleReview} src={avatar} alt={`${username} User Profile`} />
          </div>

          <div className={styles.usernameDate}>
            <div className={styles.reviewUsername}>{username}</div>
            <div className={styles.reviewCreated_at}>
              <span>{formattedDate}</span>
            </div>
          </div>

        </div>

        <div className={styles.textContainer}>
          <div className={styles.reviewText}>
            {completeReviewText ? text : reviewText}
          </div>
        </div>

        <div>
          {
            hasResponse && (
              <Response
                responseAvatar={responseAvatar}
                responseUsername={responseUsername}
                responseText={responseText}
                responseCreatedAt={responseCreatedAt}
              />
            )
          }
        </div>

        <div className={styles.reviewBorderBottom} />

      </div>
    );
  }
}


export default ReviewListItem;
