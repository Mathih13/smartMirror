// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

/*
  The template widget class. Wrap every widget in this so that
  Any sweeping widget changes and methods can be accessed on a specific
  widget. Ex: "WeatherWidget.hide()"
*/

export default class Widget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'block'
    }
  }

  componentWillMount() {
    if (this.props.hide) {
      this.setState({ display: 'none' })
    }
  }

  render() {
    return (
      <div className="Wigdet" style={{ display: this.state.display, width: '60%' }}>
          {this.props.component}
      </div>
    );
  }
}
