/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from '../src/App';
import RatingsAccuracy from '../src/RatingsAccuracy';
import RatingsCheckIn from '../src/RatingsCheckIn';
import RatingsCleanliness from '../src/RatingsCleanliness';
import RatingsCommunication from '../src/RatingsCommunication';
import RatingsLocation from '../src/RatingsLocation';
import RatingsValue from '../src/RatingsValue';
import ReviewList from '../src/ReviewList';
import ReviewListItem from '../src/ReviewListItem';
import Search from '../src/Search';
import Pages from '../src/Pages';
import PageBack from '../src/PageBack';
const mockAdapter = new MockAdapter(axios);

describe('<App /> rendering', () => {
  const wrapper = shallow(<App />);

  it('should render <App /> component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render <Total /> component', () => {
    expect(wrapper.find('.totalContainer').length).toEqual(1);
  });

  it('should render <Search /> component', () => {
    expect(wrapper.find('.searchContainer').length).toEqual(1);
  });

  it('should render <Ratings /> and <ReviewList /> component', () => {
    expect(wrapper.find('.details').length).toEqual(1);
  });

  it('should render one <Pages /> components', () => {
    expect(wrapper.find(Pages)).toHaveLength(1);
  });

  it('should have an initial state currentPage default to 1', () => {
    expect(wrapper.state('currentPage')).toEqual(1);
  });

  it('should have an initial state allReviews default to empty array', () => {
    expect(wrapper.state('allReviews')).toBeInstanceOf(Array);
  });

  it('should have an initial state displayedReviews default to empty array', () => {
    expect(wrapper.state('displayedReviews')).toBeInstanceOf(Array);
  });

  it('should have an initial state ratings default to empty object', () => {
    expect(wrapper.state('ratings')).toBeInstanceOf(Object);
  });

  it('should call getData when component mounts', (done) => {
    wrapper.instance().getData = jest.fn();
    wrapper.update();
    wrapper.instance().componentDidMount();
    expect(wrapper.instance().getData).toBeCalled();
    done();
  });

  it('should have an inital state totalReviews default to 0', () => {
    expect(wrapper.state('totalReviews')).toEqual(0);
  });
});

describe('<Search /> rendering', () => {
  const wrapper = shallow(<Search />);

  it('should have an input field', () => {
    expect(wrapper.containsMatchingElement(<input type="text" />)).toBeTruthy();
  });

  it('should have an keypress event on \'Enter\'', () => {
    expect(wrapper.find('input').simulate('keydown', { keyCode: 13 }));
  });

  it('should have an image in search bar called \'search\'', () => {
    expect(wrapper.containsMatchingElement(<i>search</i>)).toBeTruthy();
  });

  // test onChange methods
  // it('should have an input field with placeholder text \'Search reviews\'', () => {
  //   expect(wrapper.find('input').simulate('change', { target: { value: 'hello' } }));
  // });
});


describe('<RatingsAccuracy /> rendering', () => {
  const wrapper = shallow(<RatingsAccuracy />);

  it('should have a rating represented by UTF8 star', () => {
    expect(wrapper.containsMatchingElement(<span>★</span>)).toBeTruthy();
  });

  it('should render 11 individual spans', () => {
    expect(wrapper.find('span')).toHaveLength(11);
  });
});

describe('<RatingsCheckIn /> rendering', () => {
  const wrapper = shallow(<RatingsCheckIn />);

  it('should have a rating represented by UTF8 star', () => {
    expect(wrapper.containsMatchingElement(<span>★</span>)).toBeTruthy();
  });

  it('should render 11 individual spans', () => {
    expect(wrapper.find('span')).toHaveLength(11);
  });
});

describe('<RatingsCleanliness /> rendering', () => {
  const wrapper = shallow(<RatingsCleanliness />);

  it('should have a rating represented by UTF8 star', () => {
    expect(wrapper.containsMatchingElement(<span>★</span>)).toBeTruthy();
  });

  it('should render 11 individual spans', () => {
    expect(wrapper.find('span')).toHaveLength(11);
  });
});

describe('<RatingsCommunication /> rendering', () => {
  const wrapper = shallow(<RatingsCommunication />);

  it('should have a rating represented by UTF8 star', () => {
    expect(wrapper.containsMatchingElement(<span>★</span>)).toBeTruthy();
  });

  it('should render 11 individual spans', () => {
    expect(wrapper.find('span')).toHaveLength(11);
  });
});

describe('<RatingsLocation /> rendering', () => {
  const wrapper = shallow(<RatingsLocation />);

  it('should have a rating represented by UTF8 star', () => {
    expect(wrapper.containsMatchingElement(<span>★</span>)).toBeTruthy();
  });

  it('should render 11 individual spans', () => {
    expect(wrapper.find('span')).toHaveLength(11);
  });
});

describe('<RatingsValue /> rendering', () => {
  const wrapper = shallow(<RatingsValue />);

  it('should have a rating represented by UTF8 star', () => {
    expect(wrapper.containsMatchingElement(<span>★</span>)).toBeTruthy();
  });

  it('should render 11 individual spans', () => {
    expect(wrapper.find('span')).toHaveLength(11);
  });
});

// describe('<ReviewListItem /> rendering', () => {
//   const avatar = 'https://s3.amazonaws.com/uifaces/faces/twitter/dixchen/128.jpg';
//   const text = 'Harum id in est ut repellat odio dolorem et explicabo. Minus delectus modi veritatis. Perferendis ex fugiat.';

//   it('renders an <img>', () => {
//     const wrapper = shallow(<ReviewListItem avatar={avatar} text={text}/>);
//     expect(wrapper.containsMatchingElement(<img src={avatar} alt="" />)).toBeTruthy();
//   });
// });
