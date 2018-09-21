import React, { Component } from 'react';

class Booker extends Component {
  constructor() {
    super()
    this.state = {
      comboOption: ['one-way flight', 'return flight'],
      btnDisabled: true,
      plan: null,
      validation: [],
      startDate: null,
      startDate_error: false,
      endDate: null,
      endDate_error: false,
      startDateValidation: true,
      endDateValidation: true,
      twowayTravel: false
    }
    this.optionChanged = this.optionChanged.bind(this)
    this.dateChoosen = this.dateChoosen.bind(this)
    this.checkBtnStatus = this.checkBtnStatus.bind(this)
    this.returnDate = this.returnDate.bind(this)
  }

  returnDate(dateString) {
    return new Date(dateString)
  }

  checkBtnStatus() {
    let btnDisabled = false;
    if (this.state.startDate) {
      if (this.state.twowayTravel) {
        if ( this.state.endDate) {
          if (this.returnDate(this.state.endDate) < this.returnDate(this.state.startDate)) {
            btnDisabled = true;
          }
        } else {
          btnDisabled = true;
        }
      }
    } else {
      btnDisabled = true;
    }
    this.setState({
      btnDisabled
    })
  }

  dateChoosen(source, date) {
    // console.log('--->', date !== '' && isNaN(Date(date)), date, isNaN(Date(date)))
    if (date !== '' && isNaN(this.returnDate(date))) {
      // incorrect date received
      this.setState({
        [source]: date,
        [source+'_error']: true
      })
      return ;
    } 
    this.setState({
      [source]: date,
      [source+'_error']: false
    }, function() {
      this.checkBtnStatus();
    })
  }

  optionChanged(choice) {
    if (choice === this.state.comboOption[1].split(' ').join('_')) {
      this.setState({
        twowayTravel: true
      }, function() {
        this.checkBtnStatus();
      })
    }
    this.setState({
      plan: choice
    }, function() {
      this.checkBtnStatus();
    })
  }

  render() {

    return (
      <div>
        <select name="comboBox" onChange={ (e) => this.optionChanged(e.target.value) }>
          {
            this.state.comboOption.map( (item, ind) => {
              return (
                <option key={ ind } value={ item.split(' ').join('_') }>{ item }</option>
              )
            })
          }
        </select>
        <input type="date" 
          className={ (this.state.startDate_error ) ? 'error' : '' }
          onChange={ e => this.dateChoosen('startDate', e.target.value) } />
        <input type="date" 
          className={ (this.state.endDate_error ) ? 'error' : '' }
          onChange={ e => this.dateChoosen('endDate', e.target.value) } disabled={ !this.state.twowayTravel }/>
        <input type="button" value="Book" disabled={ this.state.btnDisabled } />
      </div>
    )
  }
}

export default Booker;