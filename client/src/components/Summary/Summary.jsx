/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import style from './summary.css';

import RatingBars from '../RatingBars/RatingBars.jsx';

const Summary = (props) => {
  const { data } = props;
  const [avgRating, setAvgRating] = useState('-');

  // Calculates average rating
  const averageRating = () => {
    let total = 0;

    data.forEach((el) => {
      total += el.rating;
    });

    return (total / data.length).toFixed(1);
  };

  // Runs average Rating function to generate number to display
  useEffect(() => {
    if (data.length > 0) {
      setAvgRating(averageRating());
    }
  });

  return (
    <Container className={style.ratingPlaceholder}>
      <Row>
        <Col>
          <h2>RATINGS & REVIEWS</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={6} lg={5}>
          <span className={style.rating}>{ `${avgRating}` }</span>
        </Col>
        <Col xs={5} className={style.starsPlaceholder}>Stars</Col>
      </Row>
      <Row>
        <Col xs={12}>
          <span className={style.spanFont}>100% of reviews recommend this product</span>
        </Col>
      </Row>
      <RatingBars data={data} />
    </Container>
  );
};

Summary.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

Summary.defaultProps = {
  data: [{ body: 'default' }],
};

export default Summary;
