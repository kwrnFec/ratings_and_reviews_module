import React from 'react';
import { render, screen, act } from "@testing-library/react";
import App from './App.jsx';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from '../Review/Review.jsx';
import { async } from 'regenerator-runtime';

jest.mock('axios');

configure({ adapter: new Adapter() });

describe('tests for App component', () => {
  
 test('renders review tiles', () => {
   const wrapper = shallow(<App />);
   
   // Timeout gives time for data to be retrieved and components to render
   setTimeout(() => {
     const element = wrapper.find('#reviewTile');
     expect(element.exists()).toBe(true);
   }, 500)
 })
  
})