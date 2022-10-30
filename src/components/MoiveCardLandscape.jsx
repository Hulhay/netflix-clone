import { BsPlayCircle } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

const MoiveCardLandscape = ({ isToDelete = false }) => {
  const movieData = {
    img: 'https://picsum.photos/200/300',
    title: 'Spongebob Squarepants Holiday Special',
  };

  return (
    <div className="h-20 bg-raisin-black flex justify-between items-center mb-[1px]">
      <div className="flex items-center h-full">
        <img
          className="h-20 w-32"
          src={movieData.img}
          alt={movieData.title}
        />
        <div className="ml-4 w-2/3">
          <p className="text-white line-clamp-2">{movieData.title}</p>
        </div>
      </div>
      <button className="px-4 h-full">
        {isToDelete ? (
          <MdDelete className="text-white w-6 h-6" />
        ) : (
          <BsPlayCircle className="text-white w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default MoiveCardLandscape;
