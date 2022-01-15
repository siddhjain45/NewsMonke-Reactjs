import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
   /* articles = [
        {
        "source": {
        "id": null,
        "name": "New York Times"
        },
        "author": "Joey Roulette, Dennis Overbye",
        "title": "The James Webb Space Telescope Finishes Unfolding: How to Watch - The New York Times",
        "description": "While there are no cameras aboard the spacecraft, NASA is providing updates as the telescope deploys its mirrors. Here’s what you need to know.",
        "url": "https://www.nytimes.com/2022/01/08/science/webb-telescope-nasa-time-livestream.html",
        "urlToImage": "https://static01.nyt.com/images/2022/01/08/science/08webb-watch2/08webb-watch2-facebookJumbo.jpg",
        "publishedAt": "2022-01-08T05:00:11Z",
        "content": "Cosmologists surmise that the first stars appeared when the universe was only about 100 million years old. (Today it is 13.8 billion years old.) The farthest and earliest galaxy seen by astronomers, … [+1327 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Athletic"
        },
        "author": "Shams Charania and Anthony Slater",
        "title": "Warriors' Klay Thompson expected to make season debut on Sunday vs. Cavs: Sources - The Athletic",
        "description": "Sunday will mark exactly 941 days since the three-time champion played in an NBA game, after missing two consecutive seasons with ACL and Achilles tears.",
        "url": "https://theathletic.com/news/warriors-klay-thompson-expected-to-make-season-debut-on-sunday-vs-cavs-sources/KZz4mKF16DBx/",
        "urlToImage": "https://cdn-media.theathletic.com/KZz4mKF16DBx_KZz4mKF16DBx_m9cwmr9XAnAf_original_1440x960.jpg",
        "publishedAt": "2022-01-08T04:18:45Z",
        "content": "After missing two consecutive seasons with ACL and Achilles tears, Golden State Warriors star Klay Thompson is expected to return on Sunday against the Cleveland Cavaliers at Chase Center, sources te… [+1801 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Tigray conflict: Ethiopia frees rebel leaders in Christmas amnesty - BBC News",
        "description": "Prime Minister Abiy Ahmed says the prisoners are being released in a bid to promote reconciliation.",
        "url": "https://www.bbc.com/news/world-africa-59919539",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17342/production/_122624059_gettyimages-1323362914.jpg",
        "publishedAt": "2022-01-08T04:09:59Z",
        "content": "Image source, Getty Images\r\nImage caption, Government forces have been at war with rebels in the north of the country for over a year\r\nEthiopia's government says it will free several prominent opposi… [+2583 chars]"
        },
        {
            "source": {
            "id": null,
            "name": "KABC-TV"
            },
            "author": "Rob Hayes",
            "title": "Los Angeles County reports more than 43,000 COVID-19 infections in one day, a new record - KABC-TV",
            "description": "Los Angeles County has once again set a record for coronavirus cases in a single day, reporting more than 43,000 new infections on Friday.",
            "url": "https://abc7.com/los-angeles-county-covid-coronavirus-la-pandemic-vaccine/11439594/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/11439149_010722-kabc-5pm-covid-friday-vid.jpg?w=1600",
            "publishedAt": "2022-01-08T03:47:17Z",
            "content": "LOS ANGELES (KABC) -- Los Angeles County has once again set a record for coronavirus cases in a single day, reporting more than 43,000 new infections on Friday.The new figure broke an old record set … [+1551 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Variety"
            },
            "author": "Selome Hailu",
            "title": "Sidney Poitier Family Speaks Out Following Actor’s Death at 94: ‘His Faith in Humanity Never Faltered’ - Variety",
            "description": "Sidney Poitier’s family remembered the Hollywood giant as a humanitarian, a leader and a devoted artist in a statement issued Friday evening, a day after his death at the age of 94. The actor, who became the first Black person to win the Oscar for lead actor …",
            "url": "https://variety.com/2022/film/news/sidney-poitier-dead-family-statement-1235149585/",
            "urlToImage": "https://variety.com/wp-content/uploads/2021/12/Sidney-Poitier.jpg?w=1000",
            "publishedAt": "2022-01-08T03:23:00Z",
            "content": "Sidney Poitier’s family remembered the Hollywood giant as a humanitarian, a leader and a devoted artist in a statement issued Friday evening, a day after his death at the age of 94.\r\nThe actor, who b… [+2010 chars]"
            },
            
    ]*/
     constructor(props)
     {
         super(props);
         console.log('const')
         this.state ={
             article : [],
             page :1,
             //for loading purpose
             loading:false,
             total:0,
         }
         document.title=`${this.props.category}-NewsMonkey`
     }
    async update()
    {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0615e113f9d4ed7948cd466f620de21&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        //set true while loading
       this.setState({loading:true})
       let data = await fetch(url);
       let finaldata = await data.json();
       this.setState({article:finaldata.articles, total:finaldata.totalResults, /*set false after loaddded */ loading:false})
  
    }
    async componentDidMount()
     {
         console.log("cmd")
     /*    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0615e113f9d4ed7948cd466f620de21&page=${this.state.page}&pagesize=${this.props.pagesize}`;
          //set true while loading
         this.setState({loading:true})
         let data = await fetch(url);
         let finaldata = await data.json();
         this.setState({article:finaldata.articles, total:finaldata.totalResults, /*set false after loaddded  loading:false})*/
               this.update();
        }

     //handle prev 
     prev = async ()=>
     {
         //page  dec 1 when we hav eto previous 
       /* this.setState({loading:true})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0615e113f9d4ed7948cd466f620de21&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let finaldata = await data.json();
        this.setState({article:finaldata.articles , page:this.state.page-1,loading:false})  */
        this.setState({page:this.state.page-1})
        this.update();
     }
     
     //handlenext
     next = async ()=>
     {
         console.log('next')
         // page have to inc 
     /*    this.setState({loading:true})
           
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0615e113f9d4ed7948cd466f620de21&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let finaldata = await data.json();
        this.setState({article:finaldata.articles, page:this.state.page+1,loading:false})*/
        
        this.setState({page:this.state.page+1})
        this.update();
    }
    fetchMoreData = async ()=>
    {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0615e113f9d4ed7948cd466f620de21&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let finaldata = await data.json();
        this.setState({article:this.state.article.concat( finaldata.articles)  , 
            page:this.state.page+1,
            loading:false})
        
    }
    render() {
        return (
            <>
            
                <h1 className="my-2">NewsMonkey - Top {this.props.category} News HeadLine</h1>
               { /*ye && use when first is true then the spinner will run othrwise not */ }
                { this.state.loading && <Spinner/>}
                {/* used for infinite scroll */}
                <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length!==this.state.total}
          loader={<Spinner/>}
        >  <div className="container my-5">
             <div  className="row ">
                    { this.state.article.map((element)=>{ 
                        return  <div  className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:" "} desc={element.description?element.description:"no des"} imageUrl={element.urlToImage} url={element.url}
                                      author={element.author} date={element.publishedAt} source={element.source.name}/>
                      </div>
                    })}                 
               
             </div>
             </div>
             </InfiniteScroll>
             
            
            </>
        )
    }
}

export default News
