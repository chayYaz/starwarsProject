import React, { useState} from 'react';
import './MovieDetails.css';
import { FaStar} from 'react-icons/fa';
import { arabicToRoman } from '../../Utils/RomanNumbers';


function MovieDetails({ movie, onFavoriteToggle, favorites, movieImage }) {
  const isInitialFavorite = movie ? favorites.some((fav) => fav.episode_id === movie.episode_id) : false;
  const [isFavorite, setIsFavorite] = useState(isInitialFavorite);

  

  const handleFavoriteToggle = () => {
    onFavoriteToggle(movie);
    setIsFavorite(!isFavorite);
  };

  return movie ? (
    <div className="movie-details" style={{
      backgroundImage: `url(${movieImage})`,
      zIndex: 1,
    }}>
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
  ) : <div className='movie-details'></div>;
}

export default MovieDetails;
