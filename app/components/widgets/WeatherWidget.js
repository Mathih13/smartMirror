// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Utils from '../Utils'
import FadeIn from 'react-fade-in';

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
      <FadeIn>
        <p> Current Temperature: {this.state.temperature} </p>
      </FadeIn>
    );
  }
}
