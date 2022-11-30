import logo from './logo.svg';
import './App.css';

import StartPages from './Start_Page'
import Continuous from './Continuous'
import PauseStop from './PauseStop'
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from 'react-chrome-extension-router';
function App() {
  return (
    <div className="App">
      
      
    <Router>
    <StartPages/>
    </Router>
    </div>
  );
}

export default App;
