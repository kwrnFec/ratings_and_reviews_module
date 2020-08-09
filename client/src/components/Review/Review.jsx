import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from "./review.css";

const Review = () => (
  <Container className={ style.reviewContainer }>
  <Row>
    <Col xs={2} className={ style.starsPlaceholder }>Stars</Col>
    <Col xs={{span: 2, offset: 8}}>Username/date</Col>
  </Row>
  <Row>
    <h3>Title</h3>
  </Row>
  <Row>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet tellus. Eget lorem 
    dolor sed viverra ipsum. Faucibus vitae aliquet nec ullamcorper sit amet risus.</p>
  </Row>
  <Row>
    <span>Helpful? <a href="#">Yes(Num)</a> | <a href="#">Report</a></span>
  </Row>
  </Container>
)

export default Review;