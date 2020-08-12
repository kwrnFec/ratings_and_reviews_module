import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import regeneratorRuntime from 'regenerator-runtime';

import Review from '../Review/Review.jsx';
import style from './app.css';

const App = () => {
  const [data, setData] = useState([]);
  const [renderCount, setRenderCount] = useState(2);

  // Api call to get data
  useEffect(() => {
    let param = 23;

    const getData = async () => {
      let res = await fetch(`/reviews/${param}/list`);
      let data = await res.json();
      return data;
    }

    getData()
      .then(data => setData(data.results));
    // [] argument below ensures this only occurs on mount not on update
  }, [])

  const renderReviews = () => {
    const reviews = [];

    for (let i = 0; i < renderCount; i++) {
      if (data[i] !== undefined) {
        reviews.push(<Review data={data[i]} key={data[i].review_id} />)
      }
    }
    return reviews;
  }

  const getMoreReviews = () => {
    setRenderCount(renderCount + 2);
    renderReviews();
  }

  return (
    <Container>
      <Row>
        <Col xs={12} lg={4}>
          <div className={style.ratingPlaceholder}></div>
        </Col>
        <Col xs={12} lg={8} className={style.container}>
          {renderReviews()}
          <Button className='mr-3 mt-4' variant='outline-dark' onClick={getMoreReviews}>More Reviews</Button>
          <Button className='mt-4' variant='outline-dark'>Add A Review &#43;</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default App;