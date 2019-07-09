import React from 'react';
import moment from 'moment';
import Response from './Response';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: this.props.responseUsername,
      isLongerThan50: this.props.text.split(' ').length > 50
    };
  }

  render() {
    // js to convert created_at to Month-Year
    const timestamp = this.props.created_at;
    const formattedDate = moment(timestamp).format('MMMM YYYY');

    // conditional rendering to hide second half of long review
    const splitText = this.props.text.split(' ');
    const first50 = splitText.slice(0, 50).join(' ');
    const post50 = splitText.slice(51).join(' ');
    let reviewText;

    if (this.state.isLongerThan50) {
      reviewText = (
        <div>
          <div>
            {`first 50 ${first50}...`}
            <button type="button" className="read-more-button">Read more</button>
          </div>
        </div>
      );
    } else {
      reviewText = `first 50: ${first50}`;
    }

    return (
      <div className="review-container">

        <div className="profile">

          <div>
            <img className="img-circle-review" src={this.props.avatar} alt={`${this.props.username} User Profile`} />
          </div>

          <div className="username-date">
            <div className="review-username">{this.props.username}</div>
            <div className="review-created_at">
              <span>{formattedDate}</span>
            </div>
          </div>

        </div>

        <div className="text-container">
          <div className="review-text">
            {/*{
              `first 50: ${first50}`
            }*/}
            {reviewText}
          </div>
        </div>

        <div>
          {
            this.state.response && (
              <Response responseAvatar={this.props.responseAvatar}
                responseUsername={this.props.responseUsername}
                responseText={this.props.responseText}
                responseCreatedAt={this.props.responseCreatedAt}
              />
            )
          }
        </div>

        <div className="review-border-bottom" />

      </div>
    );
  }
}


export default Review;
