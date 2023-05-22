import React, { Component } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner'

export default class News extends Component {
   
 constructor(){

super();


this.state = {

articles: [],
loading : true,
page :1


}


 }
 

 async componentDidMount(){

let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e684c8cd563c4ed0a212dac7f22dc105&pageSize=${this.props.pageSize}`;
this.setState({loding:true})
let data = await fetch(url)

let parsedData = await data.json();


console.log(parsedData);

this.setState({
  
  
  articles:parsedData.articles,
  totalResults: parsedData.totalResults,
  loading: false



});

 }

 handleNext= async ()=>{

  if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/20))){

  
let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e684c8cd563c4ed0a212dac7f22dc105&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;

this.setState({loading:true})
let data = await fetch(url)

let parsedData = await data.json();


this.setState({
  
  page : this.state.page +1,

  articles:parsedData.articles,
  loading: false

});
}

 }
 
handlePrevious = async()=>{

  
let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e684c8cd563c4ed0a212dac7f22dc105&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
this.setState({loding:true})
let data = await fetch(url)

let parsedData = await data.json();


this.setState({ 
  
  page : this.state.page -1,

  articles:parsedData.articles,
  loading:false


});


}


    render() {
    return (

<div className="container my-3" >

{this.state.loading && <Spinner/>}
<div className="row">

{!this.state.loading && this.state.articles.map((element)=>{

return <div className="col-md-4"   key ={element.url}>

<NewsItem    title = {element.title?element.title:""} description = {element.description?element.description:""} imageUrl = {element.urlToImage?element.urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/axiom_2-sixteen_nine.jpg?VersionId=YvwakZeKyfp4.MhuGLrdDsBivZl7aruV"} newsUrl={element.url}/>


</div>

})}

</div>


<div className="container d-flex justify-content-between">

<button disabled = {this.state.page<=1}type="button" className="btn btn-dark " onClick={this.handlePrevious}>Previous</button>

<button disabled = {(this.state.page + 1 > Math.ceil(this.state.totalResults/20)) } type="button" className="btn btn-dark " onClick={this.handleNext}>Next</button>

</div>

</div>
   
    )
  }
}
