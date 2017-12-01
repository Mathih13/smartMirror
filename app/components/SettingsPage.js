// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import Sortable from './Sortable'


export default class SettingsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leftWidgets: this.props.leftWidgets,
      rightWidgets: this.props.rightWidgets
    }
  }

  componentWillUnmount() {
    this.props.newLists(this.state.leftWidgets, this.state.rightWidgets)
  }

  updateLeft(array) {
    this.setState({ leftWidgets: array })
  }

  updateRight(array) {
    this.setState({ rightWidgets: array })

  }

  render() {
    return (
      <FadeIn style={{marginTop: '10%'}}>
        <div style={{display: 'flex'}}>
          <div className="leftWidgets" data-tid="container">
            <Sortable updateLeft={this.updateLeft.bind(this)} items={this.state.leftWidgets} />
          </div>

          <div className="rightWidgets" data-tid="container">
            <Sortable updateRight={this.updateRight.bind(this)} items={this.state.rightWidgets} />
          </div>
        </div>
      </FadeIn>
    );
  }
}
