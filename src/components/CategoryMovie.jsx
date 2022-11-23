import { IoMdClose } from 'react-icons/io';
import { useState, useEffect } from 'react';
import { getGenreMovieList } from '../api';

const CategoryMovie = ({ setIsShow }) => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    getGenreMovieList().then((result) => {
      setGenres(result);
    });
  }, []);

  return (
    <div className="bg-black bg-opacity-95 z-20 h-screen w-full absolute top-0 text-white justify-center overflow-y-auto">
      <ul className="text-center pt-12 pb-24 overflow-y-auto w-full scrollbar-hide">
        {genres.map((genre) => (
          <li
            key={genre.id}
            className="py-[10px] text-xl text-white font-semibold"
          >
            {genre.name}
          </li>
        ))}
      </ul>
      <div className="fixed bottom-0 flex justify-center bg-gradient-to-t from-black to-transparent h-20 w-full">
        <button
          className="bg-white w-14 h-14 flex justify-center items-center rounded-full"
          onClick={() => setIsShow(false)}
        >
          <IoMdClose className="text-3xl text-black" />
        </button>
      </div>
    </div>
  );
};

export default CategoryMovie;
