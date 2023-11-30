import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,author,date,source}=this.props;
    return (
      <div>
        <div className="card" >
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>

        <span className=" badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1',margin: '5px'}}>{source}</span>
          </div>
  <img src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"unknown author":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm ">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem