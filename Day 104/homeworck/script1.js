import React from 'react';

function MovieList() {
  
  const arrMovieNames = [
    "Inception",
    "The Dark Knight",
    "Interstellar",
    "The Matrix",
    "Pulp Fiction",
    "Forrest Gump",
    "Fight Club",
    "The Lord of the Rings",
    "The Shawshank Redemption",
    "Gladiator"
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Movie List</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {arrMovieNames.map((movie, index) => (
          <li key={index} style={{ margin: '10px 0', fontSize: '18px' }}>
            {movie}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
