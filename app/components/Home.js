// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import Widget from './Widget';
import SettingsPage from './SettingsPage'
import Api from '../utils/api'

import WeatherWidget from './widgets/WeatherWidget'
import AnotherFuckingWidget from './widgets/AnotherFuckingWidget'
import BitCoinFeed from './widgets/BitCoinFeed'
import DisplayClock from './widgets/DisplayClock'
import RandomQuote from './widgets/RandomQuote'


const settings = require('electron-settings');

export default class Home extends Component {
  constructor() {
    super()


    this.state = {
      allWidgets: [
        <WeatherWidget />,
        <RandomQuote />,
        <DisplayClock />,
      ],
      defaultWidgets: {
        leftWidgets: [
          <RandomQuote />,
          <DisplayClock />,
        ],
        rightWidgets: [
          <WeatherWidget />,
          <AnotherFuckingWidget />,

        ]
      },
      settingsPage: false
    }
  }

  componentWillMount() {
    if (!settings.get('widgets.left')) {
      this.setState({
        leftWidgets: this.state.defaultWidgets.leftWidgets,
        rightWidgets: this.state.defaultWidgets.rightWidgets
      })
    } else {
      this.buildWidgetListsFromDB()
    }
  }

  buildWidgetListsFromDB() {
    var left = []
    var right = []
    for (var i = 0; i < settings.get('widgets.left').length; i++) {
      for (var x = 0; x < this.state.allWidgets.length; x++) {
        if (settings.get('widgets.left')[i] == this.state.allWidgets[x].type.displayName) {
          left.push(this.state.allWidgets[x])
        }
      }
    }

    for (var i = 0; i < settings.get('widgets.right').length; i++) {
      for (var x = 0; x < this.state.allWidgets.length; x++) {
        if (settings.get('widgets.right')[i] == this.state.allWidgets[x].type.displayName) {
          right.push(this.state.allWidgets[x])
        }
      }
    }

    this.setState({
      leftWidgets: left,
      rightWidgets: right
    })
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.componentCleanup.bind(this));
  }

  componentWillUnmount() {
    this.componentCleanup();
    // remove the event handler for normal unmounting
    window.removeEventListener('beforeunload', this.componentCleanup.bind(this));
  }

  // Saving and other things that happens when we close the app!
  componentCleanup() {
    this.saveWidgetOrders()
  }

  saveWidgetOrders() {
    var left = []
    var right = []

    for (var i = 0; i < this.state.leftWidgets.length; i++) {
      left.push(this.state.leftWidgets[i].type.displayName)
    }

    for (var i = 0; i < this.state.rightWidgets.length; i++) {
      right.push(this.state.rightWidgets[i].type.displayName)

    }

    settings.set('widgets', {
      left: left,
      right: right
    });
  }

  toggleSettingsPage() {
    console.log('wew');
    this.setState({ settingsPage: !this.state.settingsPage })
  }

  updateLists(left, right) {
    console.log('ayy updating lists', left, right);
    this.setState({ leftWidgets: left, rightWidgets: right })
  }

  render() {

    return (
      <div>
<<<<<<< HEAD
        <div className={styles.container} data-tid="container">
          <h4>smort mirror</h4>
          <Widget>
            <BitCoinFeed />
          </Widget>
=======



        <div className="settingsButton">
          <a onClick={() => this.toggleSettingsPage()}>
            <img src="./components/media/settings.png" style={{width: '30%'}}/>
          </a>
>>>>>>> master
        </div>

        {this.state.settingsPage ?
          <SettingsPage
            newLists={this.updateLists.bind(this)}
            leftWidgets={this.state.leftWidgets}
            rightWidgets={this.state.rightWidgets}
          />
            :

        <div style={{display: 'flex'}}>
          <div className="leftWidgets" data-tid="container">
            <ul>
              {
                this.state.leftWidgets.map((widget) => (
                          <Widget key={widget.type.displayName} component={widget} />
                      ))
              }
            </ul>

          </div>

          <div className="rightWidgets" data-tid="container">
            <ul>
              {
                this.state.rightWidgets.map((widget) => (
                          <Widget key={widget.type.displayName} component={widget} />
                      ))
              }
            </ul>
          </div>
        </div>




        }



      </div>
    );
  }
}
