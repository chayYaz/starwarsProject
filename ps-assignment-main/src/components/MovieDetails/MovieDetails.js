import React, { useState } from 'react';
import './MovieDetails.css'; // Import your CSS file
import myImage from '../../bg.jpg';
import { arabicToRoman } from '../../Utils/RomanNumbers';
function MovieDetails({ movie, onFavoriteToggle, favorites }) {
  const backgroundImageStyle = {
    backgroundImage: `url(${myImage})`, // Set the background image
  };

  return movie ? (
<div className="movie-details" style={backgroundImageStyle}>
  <div className='details-left'>
    <h2 className='title-details'>{movie.title}</h2>
    <div className='episode-box'>
      <fieldset class="border-text gradient-text">
                <legend>StarWars</legend>
                Episode <span className='roman-numerals'>{arabicToRoman(movie.episode_id)}</span>
      </fieldset>
      <div className='bottom-title'>{movie.title}</div>
    </div>
  </div>
      <button onClick={() => onFavoriteToggle(movie)}>
        {favorites.some((fav) => fav.episode_id === movie.episode_id) ? 'Dislike' : 'Like'}
      </button>
</div>
  ) : null;
}

export default MovieDetails;
