import React from 'react';
import { render, screen, act } from "@testing-library/react";
import App from './App.jsx';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from '../Review/Review.jsx';
configure({ adapter: new Adapter() });

describe('tests for App component', () => {

  test('should fetch review data', async () => {
    await act(async () => shallow(<App />))

    global.fetch = jest.fn(async () => Promise.resolve({
      json: () => Promise.resolve({
        review_id: 1,
        rating: 5,
        summary: "This product was great!",
        recommend: 0,
        response: "",
        body: "I really did or did not like this product based on whether it was sustainably sourced.  Then I found out that its made from nothing at all.",
        date: "2019-01-01T00:00:00.000Z",
        reviewer_name: "funtime",
        helpfulness: 8,
        photos: []
      })
        .then(( () => {
           expect(screen.getByText("This product was great!")).toBeInTheDocument()
        }))
        // .then(async () => {
        //   await expect(screen.getByTestId('reviewTestIdentifier')).toBe(true);
        // })
    }))
    
  })
  
  // test(`Should contain a Review component`, async () => {
  //   // await act(async () => mount(<App />))
  //   let wrapper = mount(<App />);

  //   expect(wrapper.getByTestId('reviewTestIdentifier')).toBe(true);
    
  //   // return ().then(() => {
  //   //   let wrapper = mount(<App />);
  //   //   return wrapper;
  //   // })
  //   // .then((wrapper) => {
  //   //   expect(wrapper.find(Review).exists()).toBe(true);
  //   // })
  //   // })

  // })
})