/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import style from './charRating.css';
import triangle from '../../assets/images/blackTriangle.png';
import { charRatingCalc } from '../../helpers/helpers.js';

const CharRating = (props) => {
  const { meta, feature } = props;
  const [rating, SetRating] = useState(null);

  useEffect(() => {
    charRatingCalc(meta, feature, SetRating);
  }, [meta]);

  return (
    <Container className="p-0">
      <Row className={style.wrapControl}>
        <img src={triangle} className={`${style.triangle}`} style={{ marginLeft: `${rating}%`, transition: '2s' }} alt="triangle-marker" />
      </Row>
      <Row className={`${style.outerBar} mt-1`}>
        <Col className={`${style.innerBar} mr-1`} />
        <Col className={`${style.innerBar} mr-1`} />
        <Col className={style.innerBar} />
      </Row>
    </Container>
  );
};

CharRating.propTypes = {
  feature: PropTypes.string,
  meta: PropTypes.shape({
    Fit: PropTypes.shape({}),
    Length: PropTypes.shape({}),
    Comfort: PropTypes.shape({}),
    Quality: PropTypes.shape({}),
  }),
};

CharRating.defaultProps = {
  feature: 'default',
  meta: { body: 'default' },
};

export default CharRating;
