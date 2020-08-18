/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import style from './summary.css';
import { averageRating, recommendedPercentage } from '../../helpers/helpers.js';

// COMPONENTS
import RatingBars from '../RatingBars/RatingBars.jsx';

const Summary = (props) => {
  const { data, meta } = props;
  const [avgRating, setAvgRating] = useState(0);
  const [recommendedPct, setRecommendedPct] = useState(0);
  const [starRating, setStarRating] = useState(0);

  // Runs average Rating function to generate number to display
  useEffect(() => {
    if (data.length > 0) {
      setAvgRating(averageRating(data));
      setRecommendedPct(recommendedPercentage(data));
    }
  }, [data]);

  useEffect(() => {
    setStarRating(parseFloat(avgRating));
  }, [avgRating]);

  return (
    <Container className={style.ratingContainer}>
      <Row>
        <Col>
          <h2>RATINGS & REVIEWS</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={4} lg={4}>
          <span id="avgRating" className={style.rating}>{`${avgRating}`}</span>
        </Col>
        <Col xs={5} className={style.starsPlaceholder}><Rating name="avg-rating-stars" value={starRating} precision={0.25} readOnly /></Col>
      </Row>
      <Row>
        <Col xs={12}>
          <span id="recommendedPct" className={style.spanFont}>{`${recommendedPct}% of reviews recommend this product`}</span>
        </Col>
      </Row>
      <RatingBars data={data} meta={meta} />
    </Container>
  );
};

Summary.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  meta: PropTypes.shape({
    Fit: PropTypes.shape({}),
    Length: PropTypes.shape({}),
    Comfort: PropTypes.shape({}),
    Quality: PropTypes.shape({}),
  }),
};

Summary.defaultProps = {
  data: [{ body: 'default' }],
  meta: { body: 'default' },
};

export default Summary;
