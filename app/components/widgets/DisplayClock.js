// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DisplayClock extends Component {
  constructor(props) {
    super(props)

    let currentTime = new Date()
    this.state = {
      hour: currentTime.getHours(),
      min: currentTime.getMinutes(),
      sec: currentTime.getSeconds(),
      // dayTime: null
    }
  }

  componentWillMount(){
    let increment = () => {
      if (this.state.sec >= 59) {
        this.setState({min: this.state.min + 1})
        this.setState({sec: 0})
        if (this.state.min >= 59) {
          this.setState({hour: this.state.hour + 1})
          this.setState({min: 0})
          if (this.state.hour >= 24 || 0) {
            this.setState({hour: 0})
          }
        }
      } else {
        this.setState({sec: this.state.sec + 1})
      }
    }

    let timer = setInterval(increment, 1000)
    // this.getTimeOfDay()
  }

  addZero(i) {
    if (i < 10) {
      i = "0" + i
    }
    return i;
  }

  // getTimeOfDay() {
  //   if(this.state.hour < 12) {
  //     this.setState({dayTime: "AM"})
  //   } else {
  //     this.setState({dayTime: "PM"})
  //   }
  // }

  render() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>{this.addZero(this.state.hour)}:{this.addZero(this.state.min)} {this.state.dayTime}</h1>
      </div>
    );
  }
}
