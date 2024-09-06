import { useEffect, useState } from "react"
import Newsitem from "./Newsitem";


 const NewsBoard = ({category}) => {
    const [articles, setarticles] = useState([]);
    useEffect (()=>{
      const API_KEY = "1c240689caaa49a6a3c6112781d7b1b0";
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
        fetch(url)
        .then(response => response.json())
        .then(data=>setarticles(data.articles));

    },[category])

  return (
    <div>
      <h2 className="text-center">Latest<span className="badge bg-danger"> News</span></h2>
      {articles.map((news,index)=>{
        return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}
export default NewsBoard