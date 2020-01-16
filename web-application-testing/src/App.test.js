import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {Dashboard} from './components/Dashboard'

test('App renders without crashing', () => {
  render(<App />);
});

test('Test that ball count and strike count are rendered on Display', () => {
  const {getByTestId} = render(<App />);

  getByTestId(/strikeCount/i);
  
  getByTestId(/ballCount/i);
  

})


