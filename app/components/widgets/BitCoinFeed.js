import React, { Component } from 'react';
import Api from '../../utils/api'

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
      <p>Bitcoin: {Math.round(this.state.currentCurrency)}</p>
    )
  }
}
