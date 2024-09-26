import React, { useState,useEffect } from 'react'
import './App.css';
import SearchIcon from './Search.svg';
import MovieCard from './MovieCard';
const API_Url = "https://www.omdbapi.com?apikey=46c4069d";
// let movie1 = {
//   "Title": "Spiderman",
//   "Year": "2010",
//   "imdbID": "tt1785572", 
//   "Type": "movie",
//   "Poster": "N/A"
// }


const App = () => {
  const [movies,setMovies]=useState([])
  const[searchTerm,setSearchTerm]=useState("")


  const SearchMovies = async (title) => {
    const response = await fetch(`${API_Url}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  }
  // useEffect(() => {
  //   SearchMovies('')


  // }, [])
  return ( 
     <div className='App'>
      <h1>Movie Land</h1>
      <div className='search'>
        <input placeholder='Search for Movie'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}></input>
        <img src={SearchIcon} alt='search'
          onClick={() => SearchMovies(searchTerm) }></img>
      </div>
      {
        movies?.length>0
        ?(
          <div className='container'>
            {movies.map((movie)=>
            <MovieCard movie={movie}/>
            )}
       


      </div>


        ):
        (
          <div className='empty'>
            <h2>No movies Found</h2> 
            </div>




        )
      }
     
    </div>


  );
}


export default App;






