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
      this.getArticles()
      this.setState({loading:false})

    })
  }

  getArticle(){
    var article = this.state.feed.pop();
    this.setState({title: article.title, desc: article.description});
  }

  getArticles() {
    var headlines = []
    for (var i in this.state.feed) {
      var entry = {title: this.state.feed[i].title, desc: this.state.feed[i].description.substring(0,99)+"..."}
      headlines.push(entry)
    }
    this.setState({feed: headlines})
  }

  render() {
    var i = 0
    const headlines = this.state.feed.map((article) =>
    <li className="newsFeed" key={"entry" +i++}> {article.desc} </li>);
    if (this.state.loading) {
      return (
        <p> Loading...</p>
      )
    } else {
      return (
      <div>
        <ul> {headlines}</ul>
      </div>
    )}}

  }
