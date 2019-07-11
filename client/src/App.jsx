import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList';
import Ratings from './Ratings';
import Total from './Total';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      ratings: {},
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const listingId = window.location.href.split('/').pop();
    axios.get(`/api/${listingId}/reviews`)
      .then((res) => {
        // console.log('axios res.data[0]', res.data[0]);
        this.setState({
          reviews: res.data[0].reviews,
          ratings: res.data[0].ratings,
        });
      })
      .catch((err) => {
        console.log('axios error:', err);
      });
  }

  render() {
    return (
      <div className="reviewApp">
        <div className="summary">
          <div className="summary-container">

            <div className="total-container">
              <Total reviews={this.state.reviews} ratings={this.state.ratings} />
            </div>

            <div className="search-container">
              <Search />
            </div>

          </div>
        </div>

        <div className="details">
          <Ratings ratings={this.state.ratings} />
          <ReviewList reviews={this.state.reviews} />
        </div>
      </div>
    );
  }
}

export default App;
