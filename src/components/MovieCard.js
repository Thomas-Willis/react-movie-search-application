import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img className='movie-image' src={movie.poster} alt={movie.title} />
      <h2 className="movie-title">{movie.title}</h2>
      <p className="movie-release-date">Release Date: {movie.releaseDate}</p>
      <p className="movie-overview">{movie.overview}</p>
    </div>
  );
}

export default MovieCard;