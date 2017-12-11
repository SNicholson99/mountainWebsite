import React, { Component } from 'react';
import './App.css';
import Layer1 from './../Background/Layer1';
import Layer2 from './../Background/Layer2';
import Layer3 from './../Background/Layer3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layer1 />
        <Layer2 />
        <Layer3 />
      </div>
    );
  }
}

export default App;
