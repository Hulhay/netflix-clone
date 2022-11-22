import React from 'react';
import MovieCard from './MovieCard';

const ListView = ({ group, movies }) => {
  return (
    <div className="pt-4">
      <p className="px-2 text-white text-xl font-bold">{group}</p>
      <ul className="flex overflow-x-auto scrollbar-hide">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="px-1"
          >
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
