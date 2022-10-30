import { AiOutlineInfoCircle } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { HiDownload } from 'react-icons/hi';
import { SlDislike, SlLike } from 'react-icons/sl';

const BottomSheetWatchingItem = ({ isShow, setIsShow }) => {
  return (
    <div
      className={`bottom-sheet 
      ${
        isShow
          ? 'transition duration-300'
          : 'transition translate-y-full duration-300'
      }`}
    >
      <div className="flex justify-between">
        <p className="font-semibold text-lg">The Rain</p>
        <button
          className="flex items-center justify-center bg-black-olive rounded-full w-7 h-7"
          onClick={() => setIsShow(false)}
        >
          <IoMdClose className="text-2xl" />
        </button>
      </div>
      <div>
        <ul>
          <li className="flex items-center py-2">
            <AiOutlineInfoCircle className="text-xl" />
            <p className="pl-4">Information</p>
          </li>
          <li className="flex items-center py-2">
            <HiDownload className="text-xl" />
            <p className="pl-4">Download</p>
          </li>
          <li className="flex items-center py-2">
            <SlDislike className="text-xl" />
            <p className="pl-4">Not for me</p>
          </li>
          <li className="flex items-center py-2">
            <SlLike className="text-xl" />
            <p className="pl-4">I like it</p>
          </li>
          <li className="flex items-center py-2">
            <IoMdClose className="text-xl" />
            <p className="pl-4">Remove from my list</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomSheetWatchingItem;
