import React from 'react';
import './App.css';
import {
    goBack,
    goTo,
    popToTop,
    Link,
    Router,
    getCurrent,
    getComponentStack,
  } from 'react-chrome-extension-router';
import PauseStop from './PauseStop';
import Submit from './submit';
const Continuous = () => {
    return (
<section id="stopWatch">
     
<button onClick={() => goTo(Submit)}>
        Stop
    </button>
    <button  id="continue"  onClick={() => goTo(PauseStop)}>
    Continue
    </button>
     
        <p id="fulltime" class="fulltime"> </p>
    </section>
    );
}

export default Continuous;
