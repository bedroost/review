/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import App from '../src/App';

describe('<App /> rendering', () => {
  it('should render <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render without throwing an error', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.reviewApp').exists()).toBe(true);
  });

  it('should render <Total /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.total-container').length).toEqual(1);
  });

  it('should render <Search /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.search-container').length).toEqual(1);
  });

  it('should render <Ratings /> and <ReviewList /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.details').length).toEqual(1);
  });
});
