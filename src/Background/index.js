import React, {Component} from 'react';
import './Background.css';
import Layer1 from './../Background/Layer1';
import Layer2 from './../Background/Layer2';
import Layer3 from './../Background/Layer3';

class Background extends Component {
  render () {
    return (
      <div className="background-container">
        <Layer1 style={{left:"20vw"}} />
        <Layer2 />
        <Layer3 />
      </div>
    )
  }
}

export default Background;
