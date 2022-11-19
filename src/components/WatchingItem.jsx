import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import BottomSheetMovieDetail from './BottomSheetMovieDetail';
import BottomSheetWatchingItem from './BottomSheetWatchingItem';
import Information from './icon/Information';
import Kebab from './icon/Kebab';

const WatchingItem = ({ imgUrl }) => {
  const [isShowAction, setIsShowAction] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);

  return (
    <div className="h-56 w-32">
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="h-44 flex justify-center items-center bg-cover"
      >
        <button>
          <svg
            width="65"
            height="65"
            viewBox="0 0 65 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="32.5"
              cy="32.5"
              r="31.5"
              fill="black"
              fillOpacity="0.6"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M42.4323 33.8585L24.4803 43.6894C23.8139 44.0543 23 43.5721 23 42.8123V22.7232C23 21.9554 23.8295 21.474 24.4961 21.8549L42.4481 32.1132C43.1269 32.5011 43.118 33.483 42.4323 33.8585Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="h-12 bg-eerie-black flex items-center justify-between pl-3 pr-4 border-t-2 border-red-600">
        <button onClick={() => setIsShowDetail(true)}>
          <Information/>
        </button>
        <button onClick={() => setIsShowAction(true)}>
          <Kebab/>
        </button>
      </div>
      <OutsideClickHandler onOutsideClick={() => setIsShowDetail(false)}>
        <BottomSheetMovieDetail
          isShow={isShowDetail}
          setIsShow={setIsShowDetail}
        />
      </OutsideClickHandler>
      <OutsideClickHandler onOutsideClick={() => setIsShowAction(false)}>
        <BottomSheetWatchingItem
          isShow={isShowAction}
          setIsShow={setIsShowAction}
        />
      </OutsideClickHandler>
    </div>
  );
};

export default WatchingItem;
