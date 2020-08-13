import React from 'react';
import style from './summary.css';
import { Container, Row, Col } from 'react-bootstrap';

const Summary = (props) => {

  const calculateRatingBars = (ratingNum) => {
    if (props.data !== undefined) {
      let data = [];
      let totalSame = 0;
      let totalReviews = 0;
      let percent = 0;

      // iterate over data and push each reviews rating to a new array
      if (props.data !== undefined) {
        props.data.forEach(el => {
          data.push(el.rating);
        })

        // sort and reverse the array so the data will line up 
        // with the order the bars are rendered in
        data = data.sort().reverse();
      }

      // iterate the data array, add up total reviews and total of the matching ratings
      for (let i = 0; i < data.length; i++) {
        totalReviews += 1;
        if (data[i] === ratingNum) {
          totalSame += 1;
        }
      }

      // if no reviews of a number exist return 0 
      if (totalSame === 0) {
        return 0;
      }

      // calculate percent, return as a 
      percent = totalSame / totalReviews;
      return percent.toFixed(1) * 100;
    }
  }

  const createRatingBars = () => {
    const elements = [];
    let rating = 0;

    for (let i = 5; i > 0; i--) {
      // calculate percentage to fill rating bar
      rating = calculateRatingBars(i)

      elements.push(
        <Row className={style.flexRatingBarRow} key={i}>
          <Col xs={3}>
            <span className={style.spanFont}>{i} Stars</span>
          </Col>
          <Col xs={8} className={style.outerBar}>
            <div className={style.innerBar} style={{ width: `${rating}%`, transition: '2s' }}></div>
          </Col>
        </Row>
      )
    }
    return elements;
  }

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
  )
}

export default Summary;