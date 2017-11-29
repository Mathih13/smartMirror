// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../utils/api.js';



var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=nrk&' +
          'apiKey=f06732a9a7284226a09993e2689c6f1b';

var counter

export default class NewsFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      feed: []


    }
  }

  componentWillMount(){
    Api.get(url)
    .then((json) => {
      this.setState({feed: json})})
    this.setState({loading: false})
    }

  render(){

    if(this.state.feed.loading) {
      return(
        <p> {"loading ... "}</p>
      )

    } else if (this.state.feed.length === 0){
        return (
          <div>
            <p>{"Feed is empty"}</p>
          </div>
        )
    } else {
      return (
        <div>
          <p> {this.state.feed.articles[counter].title}</p>
          <p> {this.state.feed[counter].description}</p>
        </div>
  )};
  rotate()
  }

  rotate(){
    console.log(this.state.counter)
    counter ++
  }
}
