/* eslint-disable react/jsx-filename-extension */
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Add from '../client/src/Add';

// test if there is one <h1> element in output when rendering
describe('<Add /> rendering', () => {
  it('should render one <h1>', () => {
    const wrapper = shallow(<Add />);
    expect(wrapper.children('h1')).toHaveLength(1);
  });
});
