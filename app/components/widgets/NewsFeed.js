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
      article: null
    }
  }

  componentWillMount(){

    Api.get(url)
    .then((json) => {
      this.setState({feed: json.articles})
      this.prepHeadlines(this.getArticles())
      this.setState({loading:false});
    })
  }

  componentDidMount(){
    this.rotation = setInterval(() => this.rotateFeed(), 5000);
  }

  getArticles() {
    var headlines = []
    for (var i in this.state.feed) {
      var entry = {title: this.state.feed[i].title, desc: this.state.feed[i].description.substring(0,99)+"..."}
      headlines.push(entry)
    }
    return headlines
  }

  prepHeadlines(news){
    var i = 0
    const headlines = news.map((article) =>
    <p className="newsFeed" key={"entry" +i++}> {article.title + "  " + article.desc} </p>);
    this.setState({feed: headlines})
  }

  rotateFeed(){
    var previous = this.state.article
    var news = this.state.feed.pop()
    this.setState({article: news})
    this.state.feed.unshift(previous)
  }

  render() {
    if (this.state.loading) {
      return (
        <p> Loading...</p>
      )
    } else {
      return (
      <div>
        <ul> {this.state.article}</ul>
      </div>
    )}}
  }
