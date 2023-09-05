import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: PropTypes.string,
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews () {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    })
  }
  // Run after render() 
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
    // this.setState({
    //   loading: true
    // })
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading: false,
    // })
    this.updateNews();


  }

  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  }

  handleNextClick = async () => {
      this.setState({
        page: this.state.page + 1,
      });
      this.updateNews();
  }

  render() {
    return (
      <div className="container">
        <h1>Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0,30) : ""} description={ element.description ? element.description.slice(0,60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between mb-3">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}
