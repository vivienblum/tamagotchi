import React, { Component } from 'react';

import './App.css';
import Screen from './Screen.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tamagotchi</h1>
        <Screen />
      </div>
    );
  }
}

export default App;
