/* eslint-disable react/jsx-filename-extension */
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReviewList from '../src/ReviewList';

describe('<ReviewList /> rendering', () => {
  it('should render three <p>', () => {
    const wrapper = shallow(<ReviewList />);
    expect(wrapper.children('p')).toHaveLength(3);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<ReviewList />).find('.sampleClass').length).toBe(1);
  });

  // it('should render without throwing an error', () => {
  //   expect(shallow(ReviewList />).contains(<div>Reviews</div>)).toBe(true);
  // });

  // it('should render three <Review /> components', () => {
  //   const wrapper = shallow(<ReviewList />);
  //   expect(wrapper.find(<Review />)).toHaveLength(7);
  // });
});
