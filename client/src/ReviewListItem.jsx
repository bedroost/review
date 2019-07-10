import React from 'react';
import moment from 'moment';
import Response from './Response';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: this.props.responseUsername,
      isLongerThan50: this.props.text.split(' ').length > 50,
      reviewText: null,
    };
    this.handleClickReadMore = this.handleClickReadMore.bind(this);
  }

  handleClickReadMore() {
    this.setState({
      reviewText: this.props.text,
    });
  }

  render() {
    // js to convert created_at to Month-Year format
    const timestamp = this.props.created_at;
    const formattedDate = moment(timestamp).format('MMMM YYYY');

    // conditional rendering to hide second half of long review until "Read more" is clicked
    const splitText = this.props.text.split(' ');
    const first50 = splitText.slice(0, 50).join(' ');
    let reviewText;

    // if review is a long review (>50 words)
    if (this.state.isLongerThan50) {
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
            {this.state.reviewText || reviewText}
          </div>
        </div>

        <div>
          {
            this.state.response && (
              <Response
                responseAvatar={this.props.responseAvatar}
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


export default ReviewListItem;
