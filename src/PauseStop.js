
import * as React from 'react';
import Submit from './submit';
import Continuous from './continuous';
import {
    goBack,
    goTo,
    popToTop,
    Link,
    Router,
    getCurrent,
    getComponentStack,
  } from 'react-chrome-extension-router';
const PauseStop = () => {
    return (
        <section id="stopWatch">
      
        
        
        <button onClick={() => goTo(Submit)}>
        Stop
    </button>
    <button id="pause" onClick={() => goTo(Continuous)}>
    Pause
    </button>
       
    
        <p id="fulltime" class="fulltime"> </p>
    </section>
    );
}

export default PauseStop;
