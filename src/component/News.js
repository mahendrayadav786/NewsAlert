import React, { useEffect, useState} from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News =(props)=> {
 
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults]= useState(0)
  // document.title=`${this.capitalizeFirstLetter(props.category)}-NewsAlert`;
  
  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  const  updateNews=async ()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    
    setLoading(true);
    let data = await fetch(url);

    let parsedData = await data.json();
    // console.log(parsedData);
    
   setArticles(parsedData.articles);
   setLoading(false);
   setTotalResults(parsedData.totalResults)
   
  }

  useEffect(()=>{

    updateNews();

  }, [])
  // async componentDidMount() {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e684c8cd563c4ed0a212dac7f22dc105&pageSize=${props.pageSize}`;
  //   // this.setState({loding:true})
  //   // let data = await fetch(url)

  //   // let parsedData = await data.json();

  //   // console.log(parsedData);

  //   // this.setState({

  //   //   articles:parsedData.articles,
  //   //   totalResults: parsedData.totalResults,
  //   //   loading: false

  //   // });
   
  // }

  const handleNext = async () => {
    //   if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/20))){

    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e684c8cd563c4ed0a212dac7f22dc105&page=${this.state.page +1}&pageSize=${props.pageSize}`;

    // this.setState({loading:true})
    // let data = await fetch(url)

    // let parsedData = await data.json();

    // this.setState({

    //   page : this.state.page +1,

    //   articles:parsedData.articles,
    //   loading: false

    // });
    // }
setPage(page+1)
    updateNews();
  };

  const handlePrevious = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e684c8cd563c4ed0a212dac7f22dc105&page=${this.state.page -1}&pageSize=${props.pageSize}`;
    // this.setState({loding:true})
    // let data = await fetch(url)

    // let parsedData = await data.json();

    // this.setState({

    //   page : this.state.page -1,

    //   articles:parsedData.articles,
    //   loading:false

    // });
setPage(page-1)
    
  updateNews();
  };

    return (
      <div className="container my-3">
         <h1 className = "text-center" style={{margin:"35px 0"}}>NewsAlert-Top {capitalizeFirstLetter(props.category)}</h1> 
        {loading && <Spinner />}
        <div className="row">
          {!loading &&
            articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/axiom_2-sixteen_nine.jpg?VersionId=YvwakZeKyfp4.MhuGLrdDsBivZl7aruV"
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark "
            onClick={handlePrevious}
          >
            Previous
          </button>

          <button
            disabled={
              page + 1 > Math.ceil(totalResults / 20)
            }
            type="button"
            className="btn btn-dark "
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    );
  



}


News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
  
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};


export default News