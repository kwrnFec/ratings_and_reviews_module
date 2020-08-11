import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from "./review.css";

const Review = (props) => {
  return (
    <Container className={ style.reviewContainer }>
      <Row className={ style.reviewContainerTopRow }>
        <Col xs={2} className={ style.starsPlaceholder }>Stars</Col>
        <Col xs={ { span: 2} }>{ props.data !== undefined ? props.data.reviewer_name : '' }/date</Col>
      </Row>
      <Row>
        <h3>{ props.data !== undefined ? props.data.summary : '' }</h3>
      </Row>
      <Row>
        <p>{ props.data !== undefined ? props.data.body : '' }</p>
      </Row>
      <Row>
        <span>Helpful? <a href="#">Yes(Num)</a> | <a href="#">Report</a></span>
      </Row>
    </Container>
  )
}

export default Review;