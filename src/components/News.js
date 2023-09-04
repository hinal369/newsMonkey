import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  // Run after render() 
  async componentDidMount() {
    let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=400b694a61bf4f39854157d3cfa423e6'
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0,45) : ""} description={ element.description ? element.description.slice(0,88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
// 400b694a61bf4f39854157d3cfa423e6
