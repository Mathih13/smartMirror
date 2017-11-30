// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Utils from '../Utils'
import FadeIn from 'react-fade-in';

export default class AnotherFuckingWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCity: ''
    }
  }

  componentWillMount() {
    Utils.getCurrentCity()
      .then((city) => {
        this.setState({ currentCity: city.city })
      })


  }

  render() {
    return (
      <p> {this.state.currentCity} </p>
      <FadeIn>
        <p> WOW I AM A WIDGET </p>
      </FadeIn>
    );
  }
}
