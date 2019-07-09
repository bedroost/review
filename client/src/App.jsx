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
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    // console.log(window.location.href);
    // axios.get('/api/:listing_id/reviews')
    axios.get('/api/10/reviews')
      .then((res) => {
        console.log('axios response:', res);
        console.log('res.data[0]', res.data[0]);
        this.setState({
          reviews: res.data[0].reviews,
        });
      })
      .catch((err) => {
        console.log('axios error:', err);
      });
  }

  render() {
    return (
      <div id="reviews-section">
        <h1 className="App-header">Reviews</h1>

        <div className="summary">
          <div className="summary-container">

            <div className="total-container">
              <Total />
            </div>

            <div className="search-container">
              <Search />
            </div>

          </div>
        </div>

        <div className="details">
          <Ratings />
          <ReviewList reviews={this.state.reviews} />
        </div>
      </div>
    );
  }
}

export default App;
