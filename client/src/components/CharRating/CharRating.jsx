/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import style from './charRating.css';
import triangle from '../../assets/images/blackTriangle.png';

const CharRating = (props) => {
  const { data, meta, feature } = props;
  const [rating, SetRating] = useState(null);

  const charRatingCalc = (meta, feature) => {
    if (meta !== null && feature !== undefined) {
      // console.log(feature)
      let { value } = meta[feature];
      value = Number(value).toFixed(1);
      SetRating(value * 20);
    }
  };

  useEffect(() => {
    // charRatingCalc(meta, 'Fit');
    charRatingCalc(meta, feature);
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
  data: PropTypes.arrayOf(PropTypes.object),
  meta: PropTypes.shape({
    Fit: PropTypes.shape({}),
    Length: PropTypes.shape({}),
    Comfort: PropTypes.shape({}),
    Quality: PropTypes.shape({}),
  }),
};

CharRating.defaultProps = {
  data: [{ body: 'default' }],
  meta: { body: 'default' },
};

export default CharRating;
