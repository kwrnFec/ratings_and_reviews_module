import React from 'react';
import style from './summary.css';
import { Container, Row, Col } from 'react-bootstrap';

const Summary = (props) => {

  const createRatingBars = () => {
    const elements = [];
    
    for (let i = 5; i > 0; i--) {
      elements.push(
        <Row className={style.flexRatingBarRow} key={i}>
      <Col xs={3}>
        <span className={style.spanFont}>{i} Stars</span>
      </Col>
      <Col xs={8} className={style.outerBar}>
        <div className={style.innerBar}></div>
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
      {/* <Row className={style.flexRatingBarRow}>
        <Col xs={3}>
          <span className={style.spanFont}>5 Stars</span>
        </Col>
        <Col xs={8} className={style.outerBar}>
          <div className={style.innerBar}></div>
        </Col>
      </Row> */}
      {createRatingBars()}


    </Container>
  )
}

export default Summary;