import React, { Component } from 'react';

export default class BitCoinFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      bitCoinCurrency: ''
    }
  }

  getCurrentBitCoinCurrency() {
    url = 'https://api.coindesk.com/v1/bpi/currentprice/NOK.json';

  }

  render() {
    return (
      <p> XD </p>
    );
  }
}
