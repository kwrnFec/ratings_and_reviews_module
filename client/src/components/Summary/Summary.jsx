/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import style from './summary.css';
import { averageRating, recommendedPercentage } from '../../helpers/helpers.js';

// COMPONENTS
import RatingBars from '../RatingBars/RatingBars.jsx';
import CharRating from '../CharRating/CharRating.jsx';

// const generateCharRatings = (data, meta) => {
//   const features = ['Comfort', 'Fit', 'Length', 'Quality'];
//   const results = [];

//   if (meta !== null) {
//     features.forEach((el) => {
//       console.log(el);
//       results.push(<CharRating data={data} meta={meta} feature={el} key={el} />);
//     });
//   }
//   return results;
// };

const Summary = (props) => {
  const { data, meta } = props;
  const [avgRating, setAvgRating] = useState('-');
  const [recommendedPct, setRecommendedPct] = useState(0);

  // Runs average Rating function to generate number to display
  useEffect(() => {
    if (data.length > 0) {
      setAvgRating(averageRating(data));
      setRecommendedPct(recommendedPercentage(data));
    }
  });

  return (
    <Container className={style.ratingContainer}>
      <Row>
        <Col>
          <h2>RATINGS & REVIEWS</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={6} lg={5}>
          <span id="avgRating" className={style.rating}>{`${avgRating}`}</span>
        </Col>
        <Col xs={5} className={style.starsPlaceholder}>Stars</Col>
      </Row>
      <Row>
        <Col xs={12}>
          <span id="recommendedPct" className={style.spanFont}>{`${recommendedPct}% of reviews recommend this product`}</span>
        </Col>
      </Row>
      <RatingBars data={data} meta={meta} />
      {/* {generateCharRatings(data, meta)} */}
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
