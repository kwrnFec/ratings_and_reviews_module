import React from 'react';
import { Container } from 'react-bootstrap';
import style from "./review.css";

const Review = () => (
  <div className={ style.reviewContainer }>
    <div className={ style.starsPlaceholder }></div>
    <h3>Title</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet tellus. Eget lorem 
    dolor sed viverra ipsum. Faucibus vitae aliquet nec ullamcorper sit amet risus.</p>
  </div>
)

export default Review;