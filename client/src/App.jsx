import React from 'react';
import axios from 'axios';
import Add from './Add';
import ReviewList from './ReviewList';

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
        console.log('res.data[0].ratings', res.data[0].ratings);
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
      <div className="App">
        <h1 className="App-header">
          <Add />
        </h1>
        <List reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;
