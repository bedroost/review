import React from 'react';
import moment from 'moment';
import Response from './Response';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: this.props.responseUsername,
    };
  }

  render() {
    // js to convert created_at to Month-Year
    const timestamp = this.props.created_at;
    const formattedDate = moment(timestamp).format('MMMM YYYY');

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
          <div className="review-text">{this.props.text}</div>
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
