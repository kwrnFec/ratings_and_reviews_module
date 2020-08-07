import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Review from '../Review/Review.jsx';
import style from './app.css';

const App = () => (
  <Container className={ style.container }>
    <Row>
    <Col><div xs={4} className={ style.ratingPlaceholder }></div></Col>
      <Col xs={8}><Review /></Col>
    </Row>
    
  </Container>
);

export default App;