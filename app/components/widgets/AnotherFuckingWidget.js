// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

export default class AnotherFuckingWidget extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <FadeIn>
        <p> WOW I AM A WIDGET </p>
      </FadeIn>
    );
  }
}
