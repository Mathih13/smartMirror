// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Utils from '../Utils'

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
    );
  }
}
