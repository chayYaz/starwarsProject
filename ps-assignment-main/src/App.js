import React, { useState, useEffect } from 'react';
import MovieList from '@/components/MovieList/MovieList';
import MovieDetails from '@/components/MovieDetails/MovieDetails';
import "./App.css"
import  ThePhantomMenace from './Images/ThePhanthomMenace.jpg';
import RevengeOfTheSith from './Images/RevengeOfTheSith.jpg';
import EmpireStrikesBack from "./Images/empire-strikes-back.jpg";
import ReturnOfTheJedi from "./Images/Return-of-the-Jedi.jpg";
// import AtackOfTheClones from "./Images/AtackOfTheClones.jpg";
import AtackOfTheClones2 from "./Images/attackoftheclones.jfif";
import ANewHope from "./Images/ANewHope2.jpg";

function App() {



  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState({episode_id:1,title:"The Phantom Menace"});

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (movie) => {
    if (favorites.some(fav => fav.episode_id === movie.episode_id)) {
      setFavorites(favorites.filter(fav => fav.episode_id !== movie.episode_id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  function handleMovieSelect(movie) {
    setSelectedMovie(movie);
  }

  const movieImages = {
    1: ThePhantomMenace,
    2: AtackOfTheClones2,
    3: RevengeOfTheSith,
    4: ANewHope,
    5: EmpireStrikesBack,
    6: ReturnOfTheJedi,
  };
  return (
    <div className="for-background">
    <div className="App">
      <MovieDetails movie={selectedMovie} favorites={favorites} onFavoriteToggle={handleFavorite} movieImage={movieImages[selectedMovie.episode_id]}/>
      <MovieList onMovieSelect={handleMovieSelect} movieImages={movieImages} />
    </div>
    </div>
  );

}

export default App;