// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Utils from '../Utils'
import FadeIn from 'react-fade-in';

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
      weather: null,
      styles: {
        margin: '0 0 0 1.2rem',

      }
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
      // Current weather icon needs seperate .png images that match the obj.values
      <div>
        <div style={{float: "left"}}>
          <p style={{margin: 0}}> <img src={"./components/widgets/img/" + this.state.weather.icon + ".png"}
                alt="Current Weather Icon" width="150" height="150"/> </p>
        </div>
        <div style={{...{float: "left"}, ...{height: "150px"}}}>
          <p style={{...this.state.styles, ...{fontSize: "20px"}, ...{padding: "7% 0 10% 0"}}}><b>{this.state.weather.icon}</b></p>
          <p style={this.state.styles}> {this.state.weather.temperature.value} Celcius </p>
          <p style={this.state.styles}> Rain: {this.state.weather.rain}</p>
          <p style={this.state.styles}> {this.state.weather.windSpeed.name}, {this.state.weather.windSpeed.mps}mps {this.state.weather.windDirection.name} </p>
        </div>
      </div>
    )};
      <FadeIn>
        <p> Current Temperature: {this.state.temperature} </p>
      </FadeIn>
    );
  }
}
