// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import Widget from './Widget';
import WeatherWidget from './widgets/WeatherWidget'
import AnotherFuckingWidget from './widgets/AnotherFuckingWidget'
import BitCoinFeed from './widgets/BitCoinFeed'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h4>smort mirror</h4>
          <Widget>
            <WeatherWidget />
          </Widget>
          <Widget hide> {/* Easily hide the widgets */}
            <AnotherFuckingWidget />
          </Widget>
          <Widget>
            <BitCoinFeed />
          </Widget>
        </div>
      </div>
    );
  }
}
