import React, { useState} from 'react';
import './MovieDetails.css';
import { FaStar, FaHeart } from 'react-icons/fa';
import { arabicToRoman } from '../../Utils/RomanNumbers';


function MovieDetails({ movie, onFavoriteToggle, favorites, movieImage }) {
  const isInitialFavorite = favorites.some((fav) => fav.episode_id === movie.episode_id);
  const [isFavorite, setIsFavorite] = useState(isInitialFavorite);

  const backgroundImageStyle = {
    backgroundImage: `url(${movieImage})`,
    zIndex: 1,
  };

  const handleFavoriteToggle = () => {
    onFavoriteToggle(movie);
    setIsFavorite(!isFavorite);
  };

  return movie ? (
    <div className="movie-details" style={backgroundImageStyle}>
      <div className="details-left">
        <h2 className="title-details">{movie.title}</h2>
        <div className="episode-box">
          <fieldset className="border-text gradient-text">
            <legend>StarWars</legend>
            Episode <span className="roman-numerals">{arabicToRoman(movie.episode_id)}</span>
          </fieldset>
          <div className="bottom-title">{movie.title}</div>
        </div>
      </div>
      <div className="details-right">
        {isFavorite && <p className="favorite-star"><FaStar /></p>}
        <button onClick={handleFavoriteToggle}>
          {isFavorite ? ' Dislike' : 'Like'}
        </button>
        </div>
    </div>
  ) : null;
}

export default MovieDetails;
