// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Utils from '../Utils'

const yrno = require('yr.no-forecast')({
  version: '1.9', // this is the default if not provided,
  request: {
    // make calls to locationforecast timeout after 15 seconds
    timeout: 15000
  }
});

export default class WeatherWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      location: null,
      weather: null
    }
  }

  componentWillMount() {
    var component = this
    Utils.getCurrentLocation()
      .then((loc) => {
        yrno.getWeather(loc)
          .then((weather) => {
            // Get general weather for next five days (Array with five objects)
            weather.getFiveDaySummary()
              .then((data) => component.setState(
                {
                  weather: data[0],
                  loading: false
                }))
          })
          .catch((e) => {
            console.log('an error occurred!', e);
          });
      })
  }

  render() {
    if (this.state.loading) {
      return <p> Loading... </p>
    } else {
    return (
      <div>
        <p> <img src={"./components/widgets/img/" + this.state.weather.icon + ".png"} alt="Current Weather Icon" width="195" height="168"/>
            {this.state.weather.icon} </p>
        <p> Current Temp: {this.state.weather.temperature.value} Celcius </p>
        <p> Rain: {this.state.weather.rain}</p>
        <p> Wind: {this.state.weather.windSpeed.name}, {this.state.weather.windSpeed.mps}mps {this.state.weather.windDirection.name} </p>
      </div>
    )};
  }
}
