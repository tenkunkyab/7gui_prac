import React, { Component } from "react";

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      remainder: 0,
      elapsed: 0
    };
    this.timer = 0;
    this.reset = this.reset.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
  }

  reset() {
    this.setState({
      elapsed: 0
    });
  }

  updateTimer(event) {
    this.setState({
      remainder: Math.floor(parseInt(event.target.value) / 10)
    });
  }

  render() {
    let { remainder, elapsed } = this.state;
    return (
      <div>
        <div>
          <label>Elapsed Time: </label>
          <progress max={100} value={remainder} />
        </div>
        <label>{elapsed}s</label>
        <br />
        <label>Duration</label>
        <input type="range" onChange={this.updateTimer} />
        <label>{remainder}s</label>
        <br />
        <input type="button" onClick={this.reset} value="reset" />
      </div>
    );
  }

  componentDidMount() {
    let cmpt = this;
    this.timer = setInterval(function() {
      if (cmpt.state.remainder > cmpt.state.elapsed) {
        cmpt.setState({
          elapsed: cmpt.state.elapsed + 1
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}
