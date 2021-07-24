
import './App.css';
import Stopwatch from './Stopwatch';
import Countdown from './Countdown'
import React from 'react';

class App extends React.Component{
  render(){
    return(
      <>
      <div className = "App">
        <div className = "App-title">timers demo</div>
        <div className = "Timers">
          <Stopwatch/>
          <Countdown />
        </div>
      </div>
      </>
    )
  }
}

export default App;
