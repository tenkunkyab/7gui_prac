import React, { Component } from 'react';

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      remainder: 0
    }
    this.reset = this.reset.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
  }

  reset() {
    this.setState({
      remainder: 0
    })
  }

  updateTimer(event) {
    this.setState({
      remainder: parseInt(event.target.value)/10
    })
  }

  render() {
    let { remainder } = this.state;
    return (
      <div>
        <div>
          <label>Elapsed Time: </label>
          <progress max={100} value={ remainder }></progress>
        </div>
        <label>{ remainder }s</label><br/>
        <label>Duration</label>
        <input type="range" onChange={ this.updateTimer } />
        <br/>
        <input type="button" onClick={ this.reset } value="reset" />
      </div>
    )
  }
}