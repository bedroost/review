/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import Ratings from '../src/Ratings';

describe('<Ratings /> rendering', () => {
  it('should render <App /> component', () => {
    const wrapper = shallow(<Ratings />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render without throwing an error', () => {
    const wrapper = shallow(<Ratings />);
    expect(wrapper.find('.reviewApp').exists()).toBe(true);
  });

  // render 2 ratings wells, left and right
  it('should render two Ratings Wells', () => {
    const wrapper = shallow(<Ratings />);
    expect(wrapper.find('.well')).toHaveLength(2);
  });

  // render 1 left divs

  // render 1 right divs

  // check props for right well

  // check props for left well
});
