// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Utils from '../Utils'

export default class WeatherWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      location: null
    }
  }

  componentWillMount() {
  }

  render() {
    if (this.state.loading) {
      return <p> Loading... </p>
    }
    return (
      <p> Current Temperature: {this.state.temperature} </p>
    );
  }
}
