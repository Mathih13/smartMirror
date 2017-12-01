import React, { Component } from 'react';
import Api from '../../utils/api'
import styles from '../../app.global.css'

export default class BitCoinFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      currentCurrency: 0
    }
  }

  componentWillMount() {
    var bitCoinUrl = 'https://api.coindesk.com/v1/bpi/currentprice/NOK.json';
    Api.get(bitCoinUrl)
      .then((json) => {
        console.log(json)
        this.setState({currentCurrency: json.bpi.USD.rate_float})
        console.log(this.state.currentCurrency)
      })
    }

  componentDidMount() {
  }

  render() {
    return (
      <div className="bitCoinFeedStyling">
        <img src='https://cdn.pixabay.com/photo/2017/07/27/21/37/bitcoin-2546854_960_720.png' className="bitCoinImageStyling"/>
        <p>{Math.round(this.state.currentCurrency)} $</p>
      </div>
  )
  }
}
