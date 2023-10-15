import React from 'react';

import './MovieItem.css';

function MovieItem({ movie, onMovieSelect,movieImage }) {
  const backgroundStyle = {
    backgroundImage: `url(${movieImage})`,
  };

  return (
    <div className="movie-item" onClick={() => onMovieSelect(movie)} style={backgroundStyle}>
    <div className="movie-content">
      <div className="movie-title-container">
        <h3>{movie.title}</h3>
      </div>
    </div>
  </div>
  
  );
}

export default MovieItem;
