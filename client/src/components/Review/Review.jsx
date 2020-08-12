import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import style from "./review.css";

const Review = (props) => {
  return (
    <Container className={style.reviewContainer}>
      <Row className={style.reviewContainerTopRow}>
        <Col xs={2} className={style.starsPlaceholder}>Stars</Col>
        <Col xs={{ span: 10 }} className={style.nameDate}>
          <span>{props.data !== undefined ? props.data.reviewer_name : ''}, {props.data !== undefined ? moment(props.data.date).format('MMMM Do YYYY') : ''}</span>
        </Col>
      </Row>
      <Row>
        <h3>{props.data !== undefined ? props.data.summary : ''}</h3>
      </Row>
      <Row>
        <p>{props.data !== undefined ? props.data.body : ''}</p>
      </Row>
      {(() => {
        if (props.data !== undefined && props.data.response !== 'null' && props.data.response !== null && props.data.response !== '') {
          return (
            <Row>
              <Col xs={12} id='response' className={style.response}>
                <span>Response:</span>
                <span>{props.data.response}</span>
              </Col>
            </Row>
          )
        }
      })()}
      <Row>
        <span className={style.helpfulSpan}>Helpful? <a href="#">Yes({props.data !== undefined ? props.data.helpfulness : ''})</a> | <a href="#">Report</a></span>
      </Row>
    </Container>
  )
}

export default Review;