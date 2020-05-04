import React from 'react';
import './App.css';
import Characters from './components/Character';
//import axios from 'axios';

import styled from "styled-components";

const Headline = styled.h1`
  font-size: 3rem;
  color: red;
  text-decoration: underline;
    `;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Headline>Characters</Headline>
      <Characters/>
    </div>
  );

  
}



export default App;
