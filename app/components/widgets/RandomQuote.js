// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../utils/api'
import FadeIn from 'react-fade-in';

export default class RandomQuote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    }
  }

  componentWillMount() {
    Api.get('https://talaikis.com/api/quotes/random/')
      .then((json) => this.setState({ quote: json }))
  }

  render() {
    return (
      <div>
        {this.state.quote &&
          <FadeIn>
            <p>{this.state.quote.quote}</p>
            <p style={{ marginTop: '-2%', marginLeft: '5%' }}>~ {this.state.quote.author}</p>
          </FadeIn>
        }
      </div>

    );
  }
}
