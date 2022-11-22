import { IoMdClose, IoMdPlay } from 'react-icons/io';
import { HiDownload } from 'react-icons/hi';
import { MdNavigateNext } from 'react-icons/md';
import {
  AiOutlineInfoCircle,
  AiOutlineShareAlt,
  AiOutlinePlus,
} from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { getMovieDetail } from '../api';
import { getYear, getRating, getDuration } from '../shared/string_manipulator';

const BottomSheetMovieDetail = ({ isShow, setIsShow, movieID }) => {
  const baseImgUrl = process.env.REACT_APP_BASEIMGURL;

  const [movieDetail, setMovieDetail] = useState({});
  useEffect(() => {
    getMovieDetail(movieID).then((result) => {
      setMovieDetail(result);
    });
  }, [movieID]);

  const movieDetaildum = {
    imgUrl: 'https://picsum.photos/200/300',
    title: 'Spongebob Squarepants Holiday Special',
    release_date: 2021,
    vote_average: '8.9',
    runtime: '1h53m',
    overview:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium porro tempore delectus, enim necessitatibus numquam sint vel sapiente exercitationem. Aliquam maiores ullam expedita repudiandae corrupti accusamus fugiat adipisci quae odit.',
  };

  return (
    <div className={`bottom-sheet ${isShow ? '' : 'translate-y-full'}`}>
      <div className="flex">
        <img
          className="pr-3 h-32"
          src={
            movieDetail.id
              ? `${baseImgUrl}${movieDetail.poster_path}`
              : movieDetaildum.imgUrl
          }
          alt={movieDetail.id ? movieDetail.title : movieDetaildum.title}
        />
        <div>
          <div className="flex justify-between">
            <div className="w-full">
              <p className="font-semibold text-xl line-clamp-2">
                {movieDetail.id ? movieDetail.title : movieDetaildum.title}
              </p>
              <ul className="flex w-3/5 justify-between text-quartz text-xs">
                <li>
                  {movieDetail.id
                    ? getYear(movieDetail.release_date)
                    : movieDetaildum.release_date}
                </li>
                <li>
                  {movieDetail.id
                    ? getRating(movieDetail.vote_average)
                    : movieDetaildum.vote_average}
                </li>
                <li>
                  {movieDetail.id
                    ? getDuration(movieDetail.runtime)
                    : movieDetaildum.runtime}
                </li>
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
            <p className="text-xs line-clamp-4 pt-2">
              {movieDetail.id ? movieDetail.overview : movieDetaildum.overview}
            </p>
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
