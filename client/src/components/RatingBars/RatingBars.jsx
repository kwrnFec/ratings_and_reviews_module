/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import style from './ratingBars.css';
import { calculateRatingBars } from '../../helpers/helpers.js';

const RatingBars = (props) => {
  const { data } = props;

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
    </Container>
  );
};

RatingBars.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

RatingBars.defaultProps = {
  data: [{ body: 'default' }],
};

export default RatingBars;
