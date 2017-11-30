// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import Widget from './Widget';
import SettingsPage from './SettingsPage'
import Api from '../utils/api'

import WeatherWidget from './widgets/WeatherWidget'
import AnotherFuckingWidget from './widgets/AnotherFuckingWidget'
import RandomQuote from './widgets/RandomQuote'

export default class Home extends Component {
  constructor() {
    super()


    this.state = {
      leftWidgets: [
        <RandomQuote />,
      ],
      rightWidgets: [
        <WeatherWidget />,
        <AnotherFuckingWidget />,
      ],
      allWidgets: [
        <WeatherWidget />,
        <AnotherFuckingWidget />,
        <RandomQuote />,
      ],
      settingsPage: false
    }
  }

  componentWillMount() {

  }

  componentDidMount() {
  }

  toggleSettingsPage() {
    console.log('wew');
    this.setState({ settingsPage: !this.state.settingsPage })
  }

  render() {

    return (
      <div>


        <div className="settingsButton">
          <a onClick={() => this.toggleSettingsPage()}>
            <img src="./components/media/settings.png" style={{width: '30%'}}/>
          </a>
        </div>

        {this.state.settingsPage ? <SettingsPage widgets={this.state.allWidgets}/> :

        <div style={{display: 'flex'}}>
          <div className="leftWidgets" data-tid="container">
            {
              this.state.leftWidgets.map((widget) => (
                        <Widget key={widget.type.displayName} component={widget} />
                    ))
            }
          </div>

          <div className="rightWidgets" data-tid="container">
            {
              this.state.rightWidgets.map((widget) => (
                        <Widget key={widget.type.displayName} component={widget} />
                    ))
            }
          </div>
        </div>




        }



      </div>
    );
  }
}
