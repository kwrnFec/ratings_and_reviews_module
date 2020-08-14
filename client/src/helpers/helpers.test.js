/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import { averageRating, recommendedPercentage } from './helpers.js';

const dummyRatings = [
  {
    rating: 5,
    recommend: 1,
  },
  {
    rating: 3,
    recommend: 0,
  },
  {
    rating: 2,
    recommend: 1,
  },
  {
    rating: 5,
    recommend: 1,
  },
  {
    rating: 2,
    recommend: 1,
  },
];

describe('tests for Summary component', () => {
  test('should calculate average rating', () => {
    expect(averageRating(dummyRatings)).toEqual('3.4');
  });

  test('should calculate product recommendation percentage', () => {
    expect(recommendedPercentage(dummyRatings)).toEqual(80);
  });
});
