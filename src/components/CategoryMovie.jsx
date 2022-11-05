import { IoMdClose } from 'react-icons/io';

const CategoryMovie = ({ isShow, setIsShow }) => {
  const genres = [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 99,
      name: 'Documentary',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 36,
      name: 'History',
    },
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 10402,
      name: 'Music',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10749,
      name: 'Romance',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 10770,
      name: 'TV Movie',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ];
  return (
    <div
      className={`bg-black bg-opacity-95 z-20 h-screen w-full absolute top-0 text-white justify-center overflow-y-hidden ${
        isShow ? 'flex' : 'hidden'
      }`}
    >
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
