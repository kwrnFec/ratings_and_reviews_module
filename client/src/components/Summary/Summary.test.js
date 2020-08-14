/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Summary from './Summary.jsx';

configure({ adapter: new Adapter() });

describe('tests for Summary component', () => {
  test('should render average product rating', () => {
    const wrapper = shallow(<Summary />);
    const element = wrapper.find('#avgRating');

    expect(element.exists()).toBe(true);
  });

  test('should render average product rating', () => {
    const wrapper = shallow(<Summary />);
    const element = wrapper.find('#recommendedPct');

    expect(element.exists()).toBe(true);
  });
});
