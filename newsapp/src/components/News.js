import React, { Component } from 'react'
import NewsItems from './NewsItems'


export default class News extends Component {
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false
    }
  }
  // async componentDidMount(){
  //   let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c9439f7feccc4750af18f64ad32bfe7e";
  //   let data=await fetch(url);
  //   let parseData=await data.json()
  //   console.log(parseData);
  //   this.setState({articels:parseData.articles})
  // }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c9439f7feccc4750af18f64ad32bfe7e";
    try{        
        const res = await fetch(url);
        const data = await res.json();
        this.setState({
            articles: data.articles
        });
    }
    catch(e) {
        console.log("something is not working");
    }
}
  
  
  render() {

    return (
      <div className="container my-3">
        <h2>NewsMonkey - "Top Headlines"</h2>
        <div className='row'>
          {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
          <NewsItems  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:""} newsUrl={element.url} />
          </div>
          })}
          
        </div>
      </div>
    )
  }
}
