/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RatingBars from './RatingBars.jsx';

configure({ adapter: new Adapter() });

describe('tests for RatingBars component', () => {
  test('should render 10 total rating bars', () => {
    const wrapper = shallow(<RatingBars />);
    const element = wrapper.find('#ratingBar');

    expect(element.children()).toHaveLength(10);
  });
});
