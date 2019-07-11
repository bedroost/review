/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import mockAxios from 'axios';
import ReviewListItem from '../src/ReviewList';

describe('ReviewListItem /> rendering', () => {
  // test that each review contains avatar
  it('renders an <img>', () => {
    const wrapper = shallow(<ReviewListItem />);
    expect(wrapper.find('img')).to.have.lengthOf(1);
  });

  // test that each review contains username
  // test that each review contains text
  // test that each review contains created_at
  // test each review text length is max 50
  // test if review text length is over 50, it has 'read more' button
  // test if 'read more' button is clicked, we show +50 word count

  // // when button is clicked, it triggers specific function
  // const wrapper = shallow(<Button fn={jest.fn} />)
  // expect(wrapper.simulate('click'))
  // expect(mock.toBeInvolved)

  // const wrapper = shallow(<App />)
  // wrapper.instance(someMethod)
  // expect(wrapper.state().value).toEqual(1);

});
