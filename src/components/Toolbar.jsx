import Logo from './icon/Logo';
import { IoMdArrowDropdown } from 'react-icons/io';
import CategoryMovie from './CategoryMovie';
import { getGenreMovieList } from '../api';

const Toolbar = ({ showCategory, setShowCategory }) => {
  return (
    <div className="flex items-start absolute w-full pt-5 bg-gradient-to-b from-black to-transparent h-52">
      <div className="flex w-full justify-evenly items-center">
        <div>
          <Logo />
        </div>
        <ul className="flex w-2/3 justify-between text-white">
          <li>Movie</li>
          <li>TV Show</li>
          <li>
            <button
              className="flex items-center"
              onClick={() => {
                setShowCategory(true);
                getGenreMovieList();
              }}
            >
              <p>Category</p>
              <IoMdArrowDropdown className="ml-1 text-2xl" />
            </button>
          </li>
        </ul>
      </div>
      {showCategory && <CategoryMovie setIsShow={setShowCategory} />}
    </div>
  );
};

export default Toolbar;
