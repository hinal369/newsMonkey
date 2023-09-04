import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  // Run after render() 
  async componentDidMount() {
    let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=400b694a61bf4f39854157d3cfa423e6&page=1&pageSize=9'
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    })
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=400b694a61bf4f39854157d3cfa423e6&page=${this.state.page - 1}&pageSize=9`
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1
    })
  }

  handleNextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 9)) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=400b694a61bf4f39854157d3cfa423e6&page=${this.state.page + 1}&pageSize=9`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1
      })
    } 
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
        <div className="container d-flex justify-content-between mb-3">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}
// 400b694a61bf4f39854157d3cfa423e6
