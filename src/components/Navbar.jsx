import { Link } from 'react-router-dom';
import Home from './icon/Home';
import Search from './icon/Search';
import Download from './icon/Download';
import More from './icon/More';
import Video from './icon/Video';

const Navbar = ({ page }) => {
  return (
    <div className="bg-chinese-black w-full h-14 fixed bottom-0">
      <div className="flex justify-evenly items-center">
        <Link to={'/'}>
          <button className="h-14 w-6">
            <Home isClicked={page === 'home'} />
          </button>
        </Link>
        <Link to={'/search'}>
          <button className="h-10 w-6">
            <Search isClicked={page === 'search'} />
          </button>
        </Link>
        <button className="h-10 w-6">
          <Video isClicked={page === 'video'} />
        </button>
        <Link to={'/download'}>
          <button className="h-10 w-6">
            <Download isClicked={page === 'download'} />
          </button>
        </Link>
        <button className="h-10 w-6">
          <More isClicked={page === 'more'} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
