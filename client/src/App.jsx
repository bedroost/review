import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList';
import Ratings from './Ratings';
import Total from './Total';
import Search from './Search';
import Pages from './Pages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReviews: null,
      allReviews: [],
      displayedReviews: [],
      currentPage: 1,
      ratings: {},
    };
    this.getData = this.getData.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.sliceReviews = this.sliceReviews.bind(this);
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
          totalReviews: res.data[0].numReviews,
          allReviews: res.data[0].reviews,
          displayedReviews: res.data[0].reviews.slice(0, 7),
          ratings: res.data[0].ratings,
        });
      })
      .catch((err) => {
        console.log('axios error:', err);
      });
  }

  handlePageClick(e) {
    console.log(e.target.innerText);
    const clickedPage = Number(e.target.innerText);
    this.setState({
      currentPage: clickedPage,
    }, () => this.sliceReviews());
  }

  sliceReviews() {
    this.setState({
      displayedReviews: this.state.allReviews.slice(((this.state.currentPage - 1) * 7), (this.state.currentPage * 7)),
    });
  }

  render() {
    const {
      totalReviews,
      displayedReviews,
      ratings,
      currentPage,
    } = this.state;

    return (
      <div className="reviewApp">

        <div className="summary">
          <div className="summary-container">
            <div className="total-container">
              <Total totalReviews={totalReviews} ratings={ratings} />
            </div>
            <div className="search-container">
              <Search />
            </div>
          </div>
        </div>

        <div className="summary-border-bottom" />

        <div className="details">
          <Ratings ratings={ratings} />
          <ReviewList displayedReviews={displayedReviews} />
        </div>

        <div>
          <Pages
            currentPage={currentPage}
            totalReviews={totalReviews}
            handlePageClick={this.handlePageClick}
          />
        </div>

      </div>
    );
  }
}

export default App;
