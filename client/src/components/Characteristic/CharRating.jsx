/* eslint-disable import/no-unresolved */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './charRating.css';
import triangle from '../../assets/images/blackTriangle.png';

const CharRating = () => (
  <Container xs={9}>
    <Row>
      <div>
        <span><img src={triangle} /></span>
      </div>
    </Row>
    <Row className={`${style.outerBar} mt-1`}>
      <Col className={`${style.innerBar} mr-1`} />
      <Col className={`${style.innerBar} mr-1`} />
      <Col className={style.innerBar} />
    </Row>

  </Container>
);

export default CharRating;
