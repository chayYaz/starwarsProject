import React from 'react';
// import myImage from '../../bg.jpg';
import './MovieItem.css';

function MovieItem({ movie, onMovieSelect,movieImage }) {
  const backgroundStyle = {
    backgroundImage: `url(${movieImage})`,
  };

  return (
    <div className="movie-item" onClick={() => onMovieSelect(movie)} style={backgroundStyle}>
      <div className="movie-content">
        <h2 className="movie-title">{movie.title}</h2>
       
      </div>
    </div>
  );
}

export default MovieItem;
