/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import axios from 'axios';
import ReviewList from '../src/ReviewList';

jest.mock('axios');

describe('<ReviewList /> rendering', () => {

  // it('should fetch a list of reviews', () => {
  //   const getSpy = jest.spyOn(axios, 'get');
  //   const wrapper = shallow(<ReviewList />);
  //   expect(getSpy).toBeCalled();
  // });

  it('should render without throwing an error', () => {
    const wrapper = shallow(<ReviewList />);
    expect(wrapper.contains(<div>Reviews</div>)).toBe(true);
  });

  it('should render individual reviews', () => {
    const wrapper = shallow(<ReviewList />);
    expect(wrapper.contains('div')).toHaveLength(3);
  });

  it('should render seven <ReviewListItem /> components', () => {
    const wrapper = shallow(<ReviewList />);
    expect(wrapper.children('<ReviewListItem />')).toHaveLength(7);
  });
});
