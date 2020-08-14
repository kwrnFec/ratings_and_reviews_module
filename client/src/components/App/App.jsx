/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line object-curly-newline
import { Container, Row, Col, Button } from 'react-bootstrap';
import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';

// COMPONENTS
import Review from '../Review/Review.jsx';
import Summary from '../Summary/Summary.jsx';
import style from './app.css';

const App = () => {
  const [data, setData] = useState([]);
  const [renderCount, setRenderCount] = useState(2);

  // Api call to get data
  useEffect(() => {
    const param = 28;

    const getData = async () => {
      axios.get(`/reviews/${param}/list`)
        .then((response) => {
          setData(response.data.results);
        });
    };
    getData();
    // [] argument below ensures this only occurs on mount not on update
  }, []);

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

  return (
    <Container>
      <Row>
        <Col xs={10} md={6} lg={4}>
          <Summary data={data} />
        </Col>
        <Col xs={12} lg={8} id="reviewsContainer" className={style.container}>
          {renderReviews()}
          {getMoreReviewsButton()}
          <Button className="mt-4" variant="outline-dark">Add A Review &#43;</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
