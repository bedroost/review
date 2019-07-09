import React from 'react';
import moment from 'moment';

// goal: display response component if response exists in the data
// make Review stateful. if response state exists, then render part of that object (conditional rendering)

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: this.props.responseUsername,
    };
  }

  render() {
    // js to convert created_at to Month-Year
    const timestamp = this.props.created_at
    const formattedDate = moment(timestamp).format('MMMM YYYY');

    // condition to render a response for a review
    const hasResponse = this.state.response;
    let response;
    if (hasResponse) {
      response = (
        <div className="response-container">
          <img className="img-circle" src={`${this.props.responseAvatar}`} alt={`${this.props.responseUsername} User Profile`} />
          <div>{this.props.responseUsername}</div>
          <div>{this.props.responseText}</div>
          <div>Reponse created_at placeholder</div>
        </div>
      );
    } else {
      response = null;
    }

    return (
      <div className="individual-review">

        <div className="profile">
          <div>
            <img className="img-circle" src={this.props.avatar} alt={`${this.props.username} User Profile`} />
          </div>
          <div className="username-date">
            <div className="review-username">{this.props.username}</div>
            <div className="review-created_at">
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>

        <div className="text-container">
          <div className="review-text">{this.props.text}</div>
        </div>

        <div>{response}</div>

        <div className="review-border-bottom" />

      </div>
    )
  }
}


export default Review;
