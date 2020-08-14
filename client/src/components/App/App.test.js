/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.jsx';

configure({ adapter: new Adapter() });

describe('tests for App component', () => {
  test('renders review tiles', () => {
    const wrapper = shallow(<App />);

    // Timeout gives time for data to be retrieved and components to render
    setTimeout(() => {
      const element = wrapper.find('#reviewTile');
      expect(element.exists()).toBe(true);
    }, 500);
  });
});
