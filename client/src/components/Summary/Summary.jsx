import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import style from './summary.css';

const Summary = (props) => {
  const { data } = props;

  // Calculates the width of the inner bar to fill the rating bars
  const calculateRatingBars = (ratingNum) => {
    // if (data !== undefined) {
    let sortedData = [];
    let totalSame = 0;
    let totalReviews = 0;
    let percent = 0;

    // iterate over data and push each reviews rating to a new array
    if (data !== undefined) {
      data.forEach((el) => {
        sortedData.push(el.rating);
      });

      // sort and reverse the array so the data will line up
      // with the order the bars are rendered in
      sortedData = sortedData.sort().reverse();
    }

    // iterate the data array, add up total reviews and total of the matching ratings
    for (let i = 0; i < sortedData.length; i += 1) {
      totalReviews += 1;
      if (data[i] === ratingNum) {
        totalSame += 1;
      }
    }

    // if no reviews of a number exist return 0
    if (totalSame === 0) {
      return 0;
    }

    // calculate percent
    percent = totalSame / totalReviews;
    return percent.toFixed(1) * 100;
  };

  // Generate 5 rating bars
  const createRatingBars = () => {
    const elements = [];
    let rating = 0;

    for (let i = 5; i > 0; i -= 1) {
      // calculate percentage to fill rating bar
      rating = calculateRatingBars(i);

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
    <Container className={style.ratingPlaceholder}>
      <Row>
        <Col>
          <h2>RATINGS & REVIEWS</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={6} lg={5}>
          <span className={style.rating}>3.5</span>
        </Col>
        <Col xs={5} className={style.starsPlaceholder}>Stars</Col>
      </Row>
      <Row>
        <Col xs={12}>
          <span className={style.spanFont}>100% of reviews recommend this product</span>
        </Col>
      </Row>
      {createRatingBars()}
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
