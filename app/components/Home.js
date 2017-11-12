// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import Widget from './Widget';
import WeatherWidget from './widgets/WeatherWidget'
import AnotherFuckingWidget from './widgets/AnotherFuckingWidget'
import DisplayClock from './widgets/DisplayClock'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>smart mirror</h2>

          <Widget>
            <DisplayClock />
          </Widget>

          <Widget>
            <WeatherWidget />
          </Widget>

          <Widget hide> {/* Easily hide the widgets */}
            <AnotherFuckingWidget />
          </Widget>

        </div>
      </div>
    );
  }
}
