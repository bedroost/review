import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList';
import Ratings from './Ratings';
import Total from './Total';
import Search from './Search';
import Pages from './Pages';
import SearchResults from './SearchResults';
import styles from '../dist/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReviews: 0,
      allReviews: [],
      allSearchedReviews: null,
      displayedReviews: [],
      currentPage: 1,
      ratings: {},
      search: null,
    };
    this.getData = this.getData.bind(this);
    this.sliceReviews = this.sliceReviews.bind(this);
    this.switchFromAllToSearched = this.switchFromAllToSearched.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handlePageBackClick = this.handlePageBackClick.bind(this);
    this.handlePageForwardClick = this.handlePageForwardClick.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
    this.handleBackToAllReviews = this.handleBackToAllReviews.bind(this);
    this.switchFromSearchedToAll = this.switchFromSearchedToAll.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    // const port = 3004;
    // const listingId = window.location.href.split('/')[4];
    // axios.get(`http://localhost:${port}/api/${listingId}/reviews`)
    const listingId = window.location.href.split('/')[4];
    console.log('window.location.href: ', window.location.href);
    console.log('listingId: ', listingId);
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

  sliceReviews() {
    if (this.state.allSearchedReviews) {
      this.setState({
        displayedReviews: this.state.allSearchedReviews.slice(((this.state.currentPage - 1) * 7), (this.state.currentPage * 7)),
      });
    } else {
      this.setState({
        displayedReviews: this.state.allReviews.slice(((this.state.currentPage - 1) * 7), (this.state.currentPage * 7)),
      });
    }
  }

  switchFromAllToSearched() {
    this.setState({
      displayedReviews: this.state.allSearchedReviews.slice(0, 7),
    });
  }

  switchFromSearchedToAll() {
    this.setState({
      displayedReviews: this.state.allReviews.slice(0, 7),
    });
  }

  handlePageClick(e) {
    console.log(e.target.innerText);
    const clickedPage = Number(e.target.innerText);
    this.setState({
      currentPage: clickedPage,
    }, () => this.sliceReviews());
    const element = document.getElementById('scrollTarget');
    element.scrollIntoView({behavior: 'smooth'});
  }

  handlePageBackClick() {
    const previousPage = this.state.currentPage - 1;
    this.setState({
      currentPage: previousPage,
    }, () => this.sliceReviews());
    const element = document.getElementById('scrollTarget');
    element.scrollIntoView({behavior: 'smooth'});
  }

  handlePageForwardClick() {
    const nextPage = this.state.currentPage + 1;
    this.setState({
      currentPage: nextPage,
    }, () => this.sliceReviews());
    const element = document.getElementById('scrollTarget');
    element.scrollIntoView({behavior: 'smooth'});
  }

  handleSearchInput(e) {
    this.setState({
      search: e.target.value,
    });
  }

  handleEnterPress(e) {
    if (e.key === 'Enter' && this.state.search) {
      const search = this.state.search;
      const allReviews = this.state.allReviews;

      // if true that search term contains non-space characters, setstate to searchedReviews array
      if (/\S/.test(search)) {
        const searchedReviews = allReviews.filter((review) => {
          return review.text.toLowerCase().includes(search.toLowerCase());
        });
        this.setState({
          allSearchedReviews: searchedReviews,
          currentPage: 1,
        }, () => this.switchFromAllToSearched());
      // else search term contains only space, setstate to empty array
      } else {
        this.setState({
          allSearchedReviews: [],
          currentPage: 1,
        }, () => this.switchFromAllToSearched());
      }
    }
  }

  handleBackToAllReviews() {
    this.setState({
      displayedReviews: this.state.allReviews.slice(0, 7),
      allSearchedReviews: null,
      search: null,
      currentPage: 1,
    }, () => this.switchFromSearchedToAll());
  }

  render() {
    const {
      totalReviews,
      displayedReviews,
      ratings,
      currentPage,
      allSearchedReviews,
      search,
    } = this.state;

    return (
      <div className={styles.reviewApp}>

        <div className={styles.summary}>
          <div className={styles.summaryContainer}>
            <div className={styles.totalContainer}>
              <Total totalReviews={totalReviews} ratings={ratings} />
            </div>
            <div className={styles.searchContainer}>
              <Search
                handleSearchInput={this.handleSearchInput}
                handleEnterPress={this.handleEnterPress}
                search={search}
                handleBackToAllReviews={this.handleBackToAllReviews}
              />
            </div>
          </div>
        </div>

        <div className={styles.summaryBorderBottom} />
        <div className={styles.details}>
          {
            allSearchedReviews
              ? (
                <SearchResults
                  allSearchedReviews={allSearchedReviews}
                  handleBackToAllReviews={this.handleBackToAllReviews}
                  search={search}
                />
              )
              : <Ratings ratings={ratings} />
          }
          <div id="scrollTarget" />
          <ReviewList displayedReviews={displayedReviews} />
        </div>

        <div>
          <Pages
            currentPage={currentPage}
            totalReviews={totalReviews}
            allSearchedReviews={allSearchedReviews}
            handlePageClick={this.handlePageClick}
            handlePageBackClick={this.handlePageBackClick}
            handlePageForwardClick={this.handlePageForwardClick}
          />
        </div>

      </div>
    );
  }
}

export default App;
