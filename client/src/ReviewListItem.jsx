import React from 'react';
import moment from 'moment';
import Response from './Response';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasResponse: this.props.hasResponse,
      isLongerThan50: this.props.text.split(' ').length > 50,
      completeReviewText: null,
    };
    this.handleClickReadMore = this.handleClickReadMore.bind(this);
  }

  handleClickReadMore() {
    this.setState({
      completeReviewText: this.props.text,
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
    } = this.props;

    const {
      hasResponse,
      isLongerThan50,
      completeReviewText,
    } = this.state;

    // js to convert created_at to Month-Year format
    const timestamp = createdAt;
    const formattedDate = moment(timestamp).format('MMMM YYYY');

    // conditional rendering to hide second half of long review until "Read more" is clicked
    const splitText = text.split(' ');
    const first50 = splitText.slice(0, 50).join(' ');
    let reviewText;

    // if review is a long review (>50 words)
    if (isLongerThan50) {
      // render only first 50 words followed by "Read more" button.
      // if "Read more" button is clicked, set state to render the entire text of review
      reviewText = (
        <div>
          {`${first50}...`}
          <button type="button" className="read-more-button" onClick={() => this.handleClickReadMore()}>Read more</button>
        </div>
      );
      // else render the whole review (<50 words)
    } else {
      reviewText = first50;
    }

    return (
      <div className="review-container">

        <div className="profile">

          <div>
            <img className="img-circle-review" src={avatar} alt={`${username} User Profile`} />
          </div>

          <div className="username-date">
            <div className="review-username">{username}</div>
            <div className="review-created_at">
              <span>{formattedDate}</span>
            </div>
          </div>

        </div>

        <div className="text-container">
          <div className="review-text">
            {completeReviewText || reviewText}
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

        <div className="review-border-bottom" />

      </div>
    );
  }
}


export default ReviewListItem;
