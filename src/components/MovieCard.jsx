import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import BottomSheetMovieDetail from './BottomSheetMovieDetail';

const baseImgUrl = process.env.REACT_APP_BASEIMGURL;

const MovieCard = ({ movie }) => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  return (
    <div className="w-32">
      <img
        className="rounded-md"
        src={`${baseImgUrl}${movie.poster_path}`}
        alt={movie.title}
        onClick={() => {
          setIsShowDetail(true);
        }}
      />

      <OutsideClickHandler onOutsideClick={() => setIsShowDetail(false)}>
        <BottomSheetMovieDetail
          isShow={isShowDetail}
          setIsShow={setIsShowDetail}
          movieID={movie.id}
        />
      </OutsideClickHandler>
    </div>
  );
};

export default MovieCard;
