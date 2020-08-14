/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from './Review.jsx';

configure({ adapter: new Adapter() });

const dummyArray = [
  {
    review_id: 1,
    rating: 5,
    summary: 'This product was great!',
    recommend: 0,
    response: '',
    body: 'I really did or did not like this product based on whether it was sustainably sourced.  Then I found out that its made from nothing at all.',
    date: '2019-01-01T00:00:00.000Z',
    reviewer_name: 'funtime',
    helpfulness: 8,
    photos: [],
  },
  {
    review_id: 2,
    rating: 4,
    summary: 'This product was ok!',
    recommend: 0,
    response: "I'm Glad you liked the product",
    body: 'I really did not like this product solely because I am tiny and do not fit into it.',
    date: '2019-01-11T00:00:00.000Z',
    reviewer_name: 'mymainstreammother',
    helpfulness: 2,
    photos: [],
  },
];

describe('tests for Review component', () => {
  test('review component should have 4 children if no response is given', () => {
    const wrapper = shallow(<Review />);
    expect(wrapper.find('.reviewContainer').children()).toHaveLength(4);
  });

  test('should have a stars component', () => {
    const wrapper = shallow(<Review />);
    expect(wrapper.find('.starsPlaceholder').exists()).toBe(true);
  });

  test('should have a title', () => {
    const wrapper = shallow(<Review />);
    expect(wrapper.find('h3').exists()).toBe(true);
  });

  test('should have a review body paragraph', () => {
    const wrapper = shallow(<Review />);
    expect(wrapper.find('p').exists()).toBe(true);
  });

  test('should not render a response if there is not one', () => {
    const wrapper = shallow(<Review data={dummyArray[0]} />);

    expect(wrapper.find('#response').exists()).toBe(false);
  });

  test('should render a response if there is one', () => {
    const wrapper = shallow(<Review data={dummyArray[1]} />);

    expect(wrapper.find('#response').text()).toBe("Response:I'm Glad you liked the product");
  });
});
