import React, { Component } from 'react';
import Booker from './components/FlightBook/FlightBooker'
import Counter from './components/counter/Counter';
import Convertor from './components/tempconvertor/Convertor'
import Timer from './components/Timer/Timer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to 7GUI Tasks</h1>
        </header>
        <p className="App-intro">
          url: <a href="http://eugenkiss.github.io/7guis/tasks/">http://eugenkiss.github.io/7guis/tasks/</a>
        </p>
        <hr />
        <Counter />
        <hr />
        <Convertor />
        <hr />
        <Booker />
        <hr />
        <Timer />
      </div>
    );
  }
}

export default App;
