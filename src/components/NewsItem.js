import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl ? imageUrl : "https://gumlet.assettype.com/freepressjournal/2023-09/34a41008-eb2a-4442-9287-ed47a11cef4f/Untitled_design.png?rect=0%2C0%2C3900%2C2048&w=1200&auto=format%2Ccompress&ogImage=true"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}
