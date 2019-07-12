/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import axios from 'axios';
import App from '../src/App';
import Ratings from '../src/Ratings';
import ReviewList from '../src/ReviewList';
import ReviewListItem from '../src/ReviewList';
import Pages from '../src/Pages';

jest.mock('axios');

describe('<App /> rendering', () => {
  const wrapper = shallow(<App />);

  it('should render <App /> component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render without throwing an error', () => {
    expect(wrapper.find('.reviewApp').exists()).toBe(true);
  });

  it('should render <Total /> component', () => {
    expect(wrapper.find('.total-container').length).toEqual(1);
  });

  it('should render <Search /> component', () => {
    expect(wrapper.find('.search-container').length).toEqual(1);
  });

  it('should render <Ratings /> and <ReviewList /> component', () => {
    expect(wrapper.find('.details').length).toEqual(1);
  });

  it('should render one <Pages /> components', () => {
    expect(wrapper.find(Pages)).toHaveLength(1);
  });

  it('should have an inital state currentPage default to 1', () => {
    expect(wrapper.state('currentPage')).toEqual(1);
  });
});

/*
Add tests below when jest mock axios is available
*/

// describe('<ReviewList /> rendering', () => {
//   it('should render without throwing an error', () => {
//     const wrapper = shallow(<ReviewList />);
//     expect(wrapper.contains(<div>Reviews</div>)).toBe(true);
//   });

//   it('should render individual reviews', () => {
//     const wrapper = shallow(<ReviewList />);
//     expect(wrapper.contains('div')).toHaveLength(3);
//   });

//   it('should render seven <ReviewListItem /> components', () => {
//     const wrapper = shallow(<ReviewList />);
//     expect(wrapper.children('<ReviewListItem />')).toHaveLength(7);
//   });
// });

// describe('ReviewListItem /> rendering', () => {
//   it('renders an <img>', () => {
//     const wrapper = shallow(<ReviewListItem />);
//     expect(wrapper.find('img')).to.have.lengthOf(1);
//   });
// });

// describe('<Ratings /> rendering', () => {
//   it('should render <App /> component', () => {
//     const wrapper = shallow(<Ratings />);
//     expect(wrapper.exists()).toBe(true);
//   });

//   it('should render without throwing an error', () => {
//     const wrapper = shallow(<Ratings />);
//     expect(wrapper.find('.reviewApp').exists()).toBe(true);
//   });

//   it('should render two Ratings Wells', () => {
//     const wrapper = shallow(<Ratings />);
//     expect(wrapper.find('.well')).toHaveLength(2);
//   });
// });