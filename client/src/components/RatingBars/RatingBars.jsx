/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import style from './ratingBars.css';
import { calculateRatingBars } from '../../helpers/helpers.js';

// COMPONENTS
import CharRating from '../CharRating/CharRating.jsx';

// Creates 4 ratingbars for characteristics of product
const generateCharRatings = (data, meta) => {
  const results = [];
  let features;

  if (meta !== null) {
    features = Object.keys(meta);
  }

  if (meta !== null) {
    // Creates one bar for each feature
    features.forEach((el) => {
      results.push(
        <Container key={el}>
          <Row className={style.CharRating}>
            <span className={`${style.spanFont}, ${style.spanAdjust}`}>{el}</span>
            <CharRating data={data} meta={meta} feature={el} />
          </Row>
          <Row>
            <Col xs={4} className="ratingSpans p-0 pr-4 text-center">
              <span className={style.spanFont}>{el === 'Comfort' || el === 'Quality' ? 'Poor' : 'Too small'}</span>
            </Col>
            <Col xs={4} className="ratingSpans pl-3 text-center">
              <span className={style.spanFont}>{el === 'Comfort' || el === 'Quality' ? 'Good' : 'Perfect'}</span>
            </Col>
            <Col xs={4} className="ratingSpans p-0 pl-4 text-center">
              <span className={style.spanFont}>{el === 'Comfort' || el === 'Quality' ? 'Great' : 'Too large'}</span>
            </Col>
          </Row>
        </Container>,
      );
    });
  }
  return results;
};

// Generate 5 rating bars
const createRatingBars = (data) => {
  const elements = [];
  let rating = 0;

  for (let i = 5; i > 0; i -= 1) {
    // calculate percentage to fill rating bar
    rating = calculateRatingBars(i, data);

    // Create a rating bar for 1 - 5 stars
    elements.push(
      <Row className={style.flexRatingBarRow} id="ratingBar" key={i}>
        <Col xs={3}>
          <span className={style.spanFont}>{`${i} Stars`}</span>
        </Col>
        <Col xs={8} className={style.outerBar}>
          <div className={style.innerBar} style={{ width: `${rating}%`, transition: '2s' }} />
        </Col>
      </Row>,
    );
  }
  return elements;
};

const RatingBars = (props) => {
  const { data, meta } = props;

  return (
    <Container id="RatingBarContainer">
      {createRatingBars(data)}
      <Row className="mt-5" />
      {generateCharRatings(data, meta)}
    </Container>
  );
};

RatingBars.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  meta: PropTypes.shape({
    Fit: PropTypes.shape({}),
    Length: PropTypes.shape({}),
    Comfort: PropTypes.shape({}),
    Quality: PropTypes.shape({}),
  }),
};

RatingBars.defaultProps = {
  data: [{ body: 'default' }],
  meta: { body: 'default' },
};

export default RatingBars;
