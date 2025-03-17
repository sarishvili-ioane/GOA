import React from 'react';
import Navbar from './Navbar';
import Counter from './Counter';
import MovieList from './MovieList';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to My Simple React Website</h1>
        <Counter />
        <MovieList />
      </div>
    </div>
  );
}

export default App;
