import React, { Component } from 'react'

class Convertor extends Component {
  constructor() {
    super()
    this.state = {
      celsius: 0,
      fahrenheit: 0
    }
    this.convertToC = this.convertToC.bind(this)
    this.convertToF = this.convertToF.bind(this)
  }

  convertToC(newVal) {
    if (!isNaN(newVal)) {
      this.setState({
        fahrenheit: newVal * (9/5) + 32
      })
    }
    this.setState({
      celsius: newVal
    })
  }

  convertToF(newVal) {
    if (!isNaN(newVal)) {
      this.setState({
        celsius: (newVal - 32) * (5/9)
      })
    }
    this.setState({
      fahrenheit: newVal
    })
  }

  render() {
    let { celsius, fahrenheit } = this.state;
    return (
      <div>
        <input type="text" onChange={ (e) => this.convertToC(e.target.value) } value={ celsius } /> Celsius
        To
        <input type="text" onChange={ (e) => this.convertToF(e.target.value) } value={ fahrenheit } /> Fahrenheit
      </div>
    )
  }
}

export default Convertor;