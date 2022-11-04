import { IoMdClose, IoMdPlay } from 'react-icons/io';
import { HiDownload } from 'react-icons/hi';
import { MdNavigateNext } from 'react-icons/md';
import {
  AiOutlineInfoCircle,
  AiOutlineShareAlt,
  AiOutlinePlus,
} from 'react-icons/ai';

const BottomSheetMovieDetail = ({ isShow, setIsShow }) => {
  const movieInfo = {
    imgUrl: 'https://picsum.photos/200/300',
    title: 'Spongebob Squarepants Holiday Special',
    year: 2021,
    rating: '13+',
    duration: '1h 53m',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium porro tempore delectus, enim necessitatibus numquam sint vel sapiente exercitationem. Aliquam maiores ullam expedita repudiandae corrupti accusamus fugiat adipisci quae odit.',
  };

  return (
    <div className={`bottom-sheet ${isShow ? '' : 'translate-y-full'} z-10`}>
      <div className="flex">
        <img
          className="pr-3 h-32"
          src={movieInfo.imgUrl}
          alt={movieInfo.title}
        />
        <div>
          <div className="flex justify-between">
            <div className="w-full">
              <p className="font-semibold text-xl line-clamp-2">
                {movieInfo.title}
              </p>
              <ul className="flex w-3/5 justify-between text-quartz text-xs">
                <li>{movieInfo.year}</li>
                <li>{movieInfo.rating}</li>
                <li>{movieInfo.duration}</li>
              </ul>
            </div>
            <button
              className="flex items-center justify-center bg-black-olive rounded-full w-7 h-7"
              onClick={() => setIsShow(false)}
            >
              <IoMdClose className="text-2xl" />
            </button>
          </div>
          <div>
            <p className="text-xs line-clamp-4 pt-2">{movieInfo.description}</p>
          </div>
        </div>
      </div>
      <div className="py-3">
        <ul className="flex justify-evenly">
          <li className="flex flex-col items-center">
            <div className="flex items-center justify-center bg-white rounded-full w-7 h-7">
              <IoMdPlay className="text-eerie-black" />
            </div>
            <p className="text-xs text-quartz">Play</p>
          </li>
          <li className="flex flex-col items-center">
            <div className="flex items-center justify-center bg-black-olive rounded-full w-7 h-7">
              <HiDownload />
            </div>
            <p className="text-xs text-quartz">Download</p>
          </li>
          <li className="flex flex-col items-center">
            <div className="flex items-center justify-center bg-black-olive rounded-full w-7 h-7">
              <AiOutlinePlus />
            </div>
            <p className="text-xs text-quartz">My List</p>
          </li>
          <li className="flex flex-col items-center">
            <div className="flex items-center justify-center bg-black-olive rounded-full w-7 h-7">
              <AiOutlineShareAlt />
            </div>
            <p className="text-xs text-quartz">Share</p>
          </li>
        </ul>
      </div>
      <div className="flex justify-between border-t-[1px] border-black-olive pt-3">
        <div className="flex items-center">
          <AiOutlineInfoCircle className="text-xl" />
          <p className="pl-4">More</p>
        </div>
        <div>
          <MdNavigateNext className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default BottomSheetMovieDetail;
