/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import style from './ratingBars.css';
import { calculateRatingBars } from '../../helpers/helpers.js';

import CharRating from '../CharRating/CharRating.jsx';

const generateCharRatings = (data, meta) => {
  const features = ['Comfort', 'Fit', 'Length', 'Quality'];
  const results = [];

  if (meta !== null) {
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

const RatingBars = (props) => {
  const { data, meta } = props;

  // Generate 5 rating bars
  const createRatingBars = () => {
    const elements = [];
    let rating = 0;

    for (let i = 5; i > 0; i -= 1) {
      // calculate percentage to fill rating bar
      rating = calculateRatingBars(i, data);

      elements.push(
        <Row className={style.flexRatingBarRow} key={i}>
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

  return (
    <Container id="RatingBarContainer">
      {createRatingBars()}
      {/* <Row className="mt-5">
        <span className="ml-3">Size</span>
      </Row> */}
      <Row className="mt-5" />
      {generateCharRatings(data, meta)}

      {/* <CharRating data={data} meta={meta} />
      <Row>
        <Col>
          <span className={style.spanFont}>Too small</span>
        </Col>
        <Col>
          <span className={style.spanFont}>Perfect</span>
        </Col>
        <Col>
          <span className={style.spanFont}>Too large</span>
        </Col>
      </Row> */}
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
