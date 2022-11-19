import React from 'react';
import MovieCard from './MovieCard';

const ListView = ({ titleListView }) => {
  const movies = [
    {
      id: 1,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 4,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 5,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 6,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 7,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 8,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 9,
      imgUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 10,
      imgUrl: 'https://picsum.photos/200/300',
    },
  ];
  return (
    <div className="pt-4">
      <p className="px-2 text-white text-xl font-bold">{titleListView}</p>
      <ul className="flex overflow-x-auto scrollbar-hide">
        {movies.map((item) => (
          <li
            key={item.id}
            className="px-1"
          >
            <MovieCard imgUrl={item.imgUrl} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
