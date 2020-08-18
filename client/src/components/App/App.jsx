/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line object-curly-newline
import { Container, Row, Col, Button, Modal, Form, InputGroup, ToggleButton } from 'react-bootstrap';
import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';

// COMPONENTS
import Review from '../Review/Review.jsx';
import Summary from '../Summary/Summary.jsx';
import style from './app.css';

const getData = async (param, fn) => {
  // Get review data
  axios.get(`/reviews/${param}/list`)
    .then((response) => {
      fn(response.data.results);
    });
};

const getMeta = async (param, fn) => {
  // Get meta data
  axios.get(`/reviews/${param}/meta`)
    .then((response) => {
      fn(response.data.characteristics);
    });
};

const App = () => {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState(null);
  const [renderCount, setRenderCount] = useState(2);
  const [show, setShow] = useState(false);
  const [newReview, setNewReview] = useState({});
  const param = 20;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Api call to get data
  useEffect(() => {
    getData(param, setData);
    getMeta(param, setMeta);
    // [] argument below ensures this only occurs on mount not on update
    // Wacky loop because data passed in, no current work around
  }, [data]);

  // Creates the list of review tiles to be rendered
  const renderReviews = () => {
    const reviews = [];

    for (let i = 0; i < renderCount; i += 1) {
      if (data[i] !== undefined) {
        reviews.push(<Review data={data[i]} key={data[i].review_id} />);
      }
    }
    return reviews;
  };

  // Gets 2 more reviews when button is clicked
  const getMoreReviews = () => {
    setRenderCount(renderCount + 2);
    renderReviews();
  };

  // Controls conditional rendering of more reviews button
  const getMoreReviewsButton = () => {
    if (data.length < 2) {
      return null;
    }
    if (data.length === renderCount || renderCount > data.length) {
      return null;
    }
    return <Button id="moreReviews" className="mr-3 mt-4" variant="outline-dark" onClick={getMoreReviews}>More Reviews</Button>;
  };

  // const createModalFormRadios = () => {
  //   const result = [];
  //   for (let i = 1; i <= 5; i += 1) {
  //     result.push(
  //       // <InputGroup.Prepend>
  //         <Form.Check label={`${i}`} value={`${i}`} type='radio' />,
  //       // </InputGroup.Prepend>,
  //     );
  //   }
  //   return result;
  // };

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Summary data={data} meta={meta} />
        </Col>
        <Col xs={12} lg={8} id="reviewsContainer" className={style.container}>
          {renderReviews()}
          {getMoreReviewsButton()}
          <Button className="mt-4" variant="outline-dark" onClick={handleShow}>Add A Review &#43;</Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add A Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <InputGroup>
                  {/* {createModalFormRadios()} */}
                </InputGroup>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
