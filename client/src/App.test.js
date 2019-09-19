import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";


// test('renders without crashing', () => {
  
//   render(<App />);
 
// });

test("renders without crashing", () => {
  //Arrange, Act, Assert
  render(<App />);
});

test("verify player card is present", () => {
   
  const { getByTestId } = render(<App />);
  getByTestId(/player-card/i);
});
