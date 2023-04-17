import React from 'react'
import "./Homecss.css";
import search from "./img/search.svg"

import { useEffect } from 'react';

const ApiUrl = 'http://www.omdbapi.com?apikey=17dc3f5b';

const Home = () => {
  // calling the api
  const searchMovie = async (title) => {
    const response = await fetch(`${ApiUrl}&s={title}`)
    const data = await response.json();

    //console.log(data.Search)
  }

  // calling the useeffect to fetch data form api
  useEffect(() => {
    searchMovie("spiderman")

  }, [])
  let movie1 ={"Poster": "https://m.media-amazon.com/images/M/MV5BYWM0MDI1ZmItZTYzNi00ZWVlLTg5MTctNzllNjY2ZTI3NDhhXkEyXkFqcGdeQXVyNDk5MjA2MQ@@._V1_SX300.jpg"
   ,"Title": "Reign of Judges: Title of Liberty - Concept Short"
   ,"Type": "movie"
  ,"Year": "2018"
}
   console.log(movie1.Year)
  return (
    <div className='app'>
      <h1>Movie House</h1>

      <div className='search'>
        <input
          placeholder='Search for movies'
          value=" "
          onChange={() => { }}
        />
        <img
          src={search} alt="saerch"
          onClick={() => { }} />
      </div>
      {/* Poster: "https://m.media-amazon.com/images/M/MV5BYWM0MDI1ZmItZTYzNi00ZWVlLTg5MTctNzllNjY2ZTI3NDhhXkEyXkFqcGdeQXVyNDk5MjA2MQ@@._V1_SX300.jpg"
Title: "Reign of Judges: Title of Liberty - Concept Short"
Type: "movie"
Year: "2018"
imdbID: "tt4275958" */}
      <div className='container'>
        <div className='movie'>
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : "https://via.placeholder.com/400"}
              alt="img" />
          </div>
          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
