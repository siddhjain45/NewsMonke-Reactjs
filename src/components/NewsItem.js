import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, desc, imageUrl, url, author, date, source } = this.props;
        return (
            <div className="container my-3">
                <div className="card" >
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:1}}>
                        {source}
                
                    </span>
                    <img src={!imageUrl ? "https://cdn.abcotvs.com/dip/images/11439149_010722-kabc-5pm-covid-friday-vid.jpg?w=1600" : imageUrl} style={{ height: "10rem" }} className="card-img-top" alt="Image Not Found" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{desc}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toUTCString()}</small></p>
                        <a href={url} className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
