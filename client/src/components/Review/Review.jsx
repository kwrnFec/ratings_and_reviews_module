/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Image, Modal } from 'react-bootstrap';
import moment from 'moment';
import style from './review.css';

const createThumbnails = (data, showState, setShowFn, currentImg, setCurrentImgFn) => {
  const results = [];
  const handleClose = () => setShowFn(false);
  const handleShow = () => setShowFn(true);

  data.photos.forEach((el) => {
    results.push(
      <span className="mr-2" key={el.id}>
        <Image
          src={el.url}
          className={style.thumbnail}
          onClick={() => { handleShow(); setCurrentImgFn(el.url); }}
          thumbnail
        />

        <Modal show={showState} onHide={handleClose}>
          <Modal.Header closeButton>
            <h2>Photo</h2>
          </Modal.Header>
          <Modal.Body>
            <Image src={currentImg} fluid />
          </Modal.Body>
        </Modal>
      </span>,
    );
  });
  return results;
};

const Review = (props) => {
  const { data } = props;
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <Container id="reviewTile" className={style.reviewContainer}>
      <Row className={style.reviewContainerTopRow}>
        <Col xs={2} className={style.starsPlaceholder}>Stars</Col>
        <Col xs={{ span: 10 }} className={style.nameDate}>
          <span>
            {`${data !== undefined ? data.reviewer_name : ''}, ${data !== undefined ? moment(data.date).format('MMMM Do YYYY') : ''}`}
          </span>
        </Col>
      </Row>
      <Row>
        <h3>{data !== undefined ? data.summary : ''}</h3>
      </Row>
      <Row>
        <p>{data !== undefined ? data.body : ''}</p>
      </Row>
      <Row>
        {createThumbnails(data, show, setShow, currentImage, setCurrentImage)}
      </Row>
      {(() => {
        if (data !== undefined && data.response !== 'null' && data.response !== null && data.response !== '') {
          return (
            <Row>
              <Col xs={12} id="response" className={style.response}>
                <span>Response:</span>
                <span>{data.response}</span>
              </Col>
            </Row>
          );
        }
        return null;
      })()}
      <Row className={style.helpfulSpan}>
        <span className="mr-1">Helpful?</span>
        <span className="mr-1">{`Yes(${data !== undefined ? data.helpfulness : ''})`}</span>
        |
        <span className="ml-1">Report</span>
      </Row>
    </Container>
  );
};

Review.propTypes = {
  data: PropTypes.shape({
    reviewer_name: PropTypes.string,
    date: PropTypes.string,
    summary: PropTypes.string,
    body: PropTypes.string,
    response: PropTypes.string,
    helpfulness: PropTypes.number,
    photos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
    })),
  }),
};

Review.defaultProps = {
  data: {
    review_id: 57387,
    rating: 5,
    summary: 'This is a test post',
    recommend: 1,
    response: null,
    body: "Hopefully this test goes smoothly. I don't know if the server is going to do additional validation or not, but I am trying my best to fit 250 or more characters in here. It's sort of like pulling a short essay out of my [redacted], but I don't have anything that is counting my characters to tell me if I hit the required amount or not. This seems like a good place to stop.",
    date: '2020-08-12T00:00:00.000Z',
    reviewer_name: 'My name Jeff',
    helpfulness: 0,
    photos: [{ id: 0, url: 'url' }],
  },
};

export default Review;
