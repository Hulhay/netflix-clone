import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';
import BottomSheetMovieDetail from './BottomSheetMovieDetail';
import BottomSheetWatchingItem from './BottomSheetWatchingItem';
import Information from './icon/Information';
import Kebab from './icon/Kebab';
import Play from './icon/Play';

const WatchingItem = ({ imgUrl }) => {
  const [isShowAction, setIsShowAction] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);

  return (
    <div className="h-56 w-32 ">
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="h-44 flex justify-center items-center bg-cover rounded-t-md"
      >
        <Link to={'/now-watching'}>
          <button>
            <Play />
          </button>
        </Link>
      </div>
      <div className="h-12 bg-eerie-black flex items-center justify-between pl-3 pr-4 border-t-2 border-red-600 rounded-b-md">
        <button onClick={() => setIsShowDetail(true)}>
          <Information />
        </button>
        <button onClick={() => setIsShowAction(true)}>
          <Kebab />
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
