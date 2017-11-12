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
      dayTime: null
    }
  }

  componentWillMount(){
    let component = this
    let increment = () => {
      if (component.state.sec >= 59) {
        component.setState({min: component.state.min + 1})
        component.setState({sec: 0})
        if (component.state.min >= 59) {
          component.setState({hour: component.state.hour + 1})
          component.setState({min: 0})
          if (component.state.hour >= 24 || 0) {
            component.setState({hour: 0})
          }
        }
      } else {
        component.setState({sec: component.state.sec + 1})
      }
    }

    let timer = setInterval(increment, 1000)

    let timeOfDay = () => {
      if(this.state.hour < 12) {
        this.setState({dayTime: "AM"})
      } else {
        this.setState({dayTime: "PM"})
      }
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.hour}:{this.state.min}:{this.state.sec} {this.state.dayTime}</p>
      </div>
    );
  }
}
