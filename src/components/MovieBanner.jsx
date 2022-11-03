import {
  AiOutlinePlus,
  AiOutlineInfoCircle,
  AiOutlineCheck,
} from 'react-icons/ai';
import { IoMdPlay } from 'react-icons/io';
import OutsideClickHandler from 'react-outside-click-handler';
import { useState } from 'react';
import BottomSheetMovieDetail from './BottomSheetMovieDetail';

const MovieBanner = () => {
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [isMyList, setIsMyList] = useState(false);
  const movieData = {
    title: 'Spongebob Squarepants Holiday Special',
    imgUrl: 'https://picsum.photos/200/300',
    tag: ['Movie', 'Animation', 'family', 'US'],
    isMyList: isMyList,
  };
  return (
    <div
      style={{ backgroundImage: `url(${movieData.imgUrl})` }}
      className="h-[450px] w-full bg-cover flex items-end justify-center"
    >
      <div className="flex flex-col justify-end items-center bg-gradient-to-t from-black to-transparent h-[450px]">
        <div className="font-bold text-3xl text-white text-center">
          {movieData.title}
        </div>
        <div className="w-5/6">
          <ul className="flex text-white justify-evenly py-5 w-full">
            {movieData.tag.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-around w-2/3 pb-5">
          <div
            className="text-white flex flex-col items-center"
            onClick={() => setIsMyList(!isMyList)}
          >
            {movieData.isMyList ? (
              <AiOutlineCheck className="text-2xl" />
            ) : (
              <AiOutlinePlus className="text-2xl" />
            )}
            <p>My List</p>
          </div>
          <div>
            <div className="h-9 w-24 bg-white rounded-md flex items-center justify-center">
              <IoMdPlay />
              <p className="pl-3">Play</p>
            </div>
          </div>
          <div
            className="text-white flex flex-col items-center"
            onClick={() => setIsShowDetail(true)}
          >
            <AiOutlineInfoCircle className="text-2xl" />
            <p>Info</p>
          </div>
        </div>
      </div>
      <OutsideClickHandler onOutsideClick={() => setIsShowDetail(false)}>
        <BottomSheetMovieDetail
          isShow={isShowDetail}
          setIsShow={setIsShowDetail}
        />
      </OutsideClickHandler>
    </div>
  );
};

export default MovieBanner;
