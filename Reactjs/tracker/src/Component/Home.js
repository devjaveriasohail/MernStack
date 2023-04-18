import React, { useState } from 'react'
import "./Homecss.css";
import MovieCard from './MovieCard';
import search from "./img/search.svg"
import { useEffect } from 'react';

const ApiUrl = 'http://www.omdbapi.com?apikey=17dc3f5b';

const Home = () => {
  // calling the set movie though api
  const [movie, setMovie] = useState([])
  const [searchterm, setSearchterm] = useState("");
  // calling the api
  const searchMovie = async(title) => {
    const response = await fetch(`${ApiUrl}&s=${title}`)
    const data = await response.json();
    setMovie(data.Search);
    console.log(data.Search)
  }
  //
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
    searchMovie(searchterm);
    }
  };
  // calling the useeffect to fetch data form api
  useEffect(() => {
    searchMovie("searchterm")

  }, [])

  return (
    <div className='app'>
      <h1>Movie House</h1>

      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <img
          src={search} alt="search"
          onClick={() => searchMovie(searchterm)} />
      </div>
      {
        movie?.length > 0
          ? (
            <div className='container'>
              {movie.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (<div className='empty'>
            <h2>No Movies found</h2>
          </div>
          )
      }


    </div>
  )
}

export default Home
