import React from 'react';
import './App.css';

import { NavLink } from 'react-router-dom';
import PauseStop from './PauseStop';
import {
    goBack,
    goTo,
    popToTop,
    Link,
    Router,
    getCurrent,
    getComponentStack,
  } from 'react-chrome-extension-router';
const StartPage = () => {
    return (
        <section id="stopWatch">
  
          <h5>Watch - Count Up Timer</h5>
          <button onClick={() => goTo(PauseStop)}>
          Start 
    </button>
        <p id="fulltime" class="fulltime"> </p>
    </section>
    
    );
}

export default StartPage;
