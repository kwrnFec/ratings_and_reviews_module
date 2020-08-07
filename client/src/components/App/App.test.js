import React from 'react';
import App from './App.jsx';
// import Review from '../Review/Review.jsx';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test(`Should contain a Review component`, () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Review').exists()).toBe(true);
});