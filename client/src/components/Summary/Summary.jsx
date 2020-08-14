/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import style from './summary.css';

import RatingBars from '../RatingBars/RatingBars.jsx';

const Summary = (props) => {
  const { data } = props;
  const [avgRating, setAvgRating] = useState('-');
  const [recommendedPct, setRecommendedPct] = useState(0);

  // Calculates average rating
  const averageRating = () => {
    let total = 0;

    data.forEach((el) => {
      total += el.rating;
    });

    return (total / data.length).toFixed(1);
  };

  // Calculate percentage of users that recommend the product
  const recommendedPercentage = () => {
    let totalRecommends = 0;
    let percent = 0;

    data.forEach((el) => {
      if (el.recommend === 1) {
        totalRecommends += 1;
      }
    });

    // Calculate percentage
    percent = Math.floor((totalRecommends / data.length) * 100);
    return percent;
  };

  // Runs average Rating function to generate number to display
  useEffect(() => {
    if (data.length > 0) {
      setAvgRating(averageRating());
      setRecommendedPct(recommendedPercentage());
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
          <span className={style.spanFont}>{`${recommendedPct}% of reviews recommend this product`}</span>
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
