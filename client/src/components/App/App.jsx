import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import regeneratorRuntime from 'regenerator-runtime';

import Review from '../Review/Review.jsx';
import style from './app.css';

const App = () => {
  const [data, setData] = useState([]);

  // Api call to get data
  useEffect(() => {
    let param = 24;

    const getData = async () => {
      let res = await fetch(`/reviews/${param}/list`);
      let data = await res.json();
      return data;
    }

    getData()
      .then(data => setData(data.results));
    // [] argument below ensures this only occurs on mount not on update
  }, [])

  return (
    <Container className={style.container}>
      <Row>
        <Col xs={12} lg={4}>
          <div className={style.ratingPlaceholder}></div>
        </Col>
        <Col xs={12} lg={8}>
          {data.length > 0 ? data.map(el => <Review data={el} key={el.review_id} />) : ''}
        </Col>
      </Row>
    </Container>
  )
}

export default App;