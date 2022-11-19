import React, { useState } from 'react';
import { moviesData } from './components/Moviedata';
import MoviesList from './components/list';
import AddMovie from './components/add/add';
import SearchMovie from './components/search/search';

import './App.css';
import Trailer from './components/Trailer';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="App">
   <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      /> 
  
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>


      <Routes >
        <Route path="/trailer/:name" element={ <Trailer movies={movies}/> } />
      </Routes> 
    </div>
  );
}

export default App;
