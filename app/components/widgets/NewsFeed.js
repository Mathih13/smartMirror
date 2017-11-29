// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../utils/api.js';



var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=f06732a9a7284226a09993e2689c6f1b';

var counter

export default class NewsFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      feed: [],
      title: "",
      desc: ""
    }
  }

  componentWillMount(){
    Api.get(url)
    .then((json) => {
      this.setState({feed: json.articles})
      this.getArticle()
    })
  }

  getArticle(){
    var article = this.state.feed.pop();
    this.setState({title: article.title, desc: article.description})
    console.log(article.title);

    console.log(article.description);

  }

  render() {
    return (
      <div>
        <p> {this.state.title}</p>
        <li>{this.state.desc}</li>

      </div>
  )};
}
