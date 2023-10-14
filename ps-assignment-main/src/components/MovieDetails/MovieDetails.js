import React, { useState } from 'react';
import './MovieDetails.css'; // Import your CSS file
// import myImage from '../../bg.jpg';
import { arabicToRoman } from '../../Utils/RomanNumbers';
function MovieDetails({ movie, onFavoriteToggle, favorites ,movieImage}) {
  const backgroundImageStyle = {
    backgroundImage: `url(${movieImage})`, // Set the background image
  zIndex:-2
  };

  return movie ? (
<div className="movie-details" style={backgroundImageStyle}>
<button onClick={() => onFavoriteToggle(movie)}>
        {favorites.some((fav) => fav.episode_id === movie.episode_id) ? 'Dislike' : 'Like'}
      </button>
  <div className='details-right'>
    <h2 className='title-details'>{movie.title}</h2>
    <div className='episode-box'>
      <fieldset class="border-text gradient-text">
                <legend>StarWars</legend>
                Episode <span className='roman-numerals'>{arabicToRoman(movie.episode_id)}</span>
      </fieldset>
      <div className='bottom-title'>{movie.title}</div>
    </div>
  </div>
     
</div>
  ) : null;
}

export default MovieDetails;
