import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.count = this.count.bind(this);
  }
  count() {
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.count} readOnly/>
        <input type="button" value="Count" onClick={ this.count } />
      </div>
    )
  }    
}


export default Counter;