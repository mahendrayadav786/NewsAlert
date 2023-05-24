
import React, { Component } from 'react'

export default class NewsItem extends Component {
  
 
  render() {

   
    let  {title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
      

      
<div className= "container my-3">


 <div className="card">
   <img src={imageUrl} className="card-img-top" alt="..."/>

   <div className="card-body">
     <h5 className="card-title"> {title}</h5>
     <p className="card-text">{description}</p>
  

     

     <small className="text-muted">{author?author:"author"} - {new Date(date).toGMTString()}</small>      </div>


   
   <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read...</a>
 </div>
 </div>

    )
  }
}
