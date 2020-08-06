import React from 'react';
import Review from './Review.jsx';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('review component should have 5 children', () => {
  test('renders a component', () => {
    let wrapper = shallow(<Review />);
    expect(wrapper.find('#review-container').children()).toHaveLength(5);
  })
  
  test('should have a stars component', () => {
    let wrapper = shallow(<Review />);
    expect(wrapper.find('#stars').exists()).toBe(true);
  })
  
})