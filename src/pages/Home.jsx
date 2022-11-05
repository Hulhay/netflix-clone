import { useState } from 'react';
import MovieBanner from '../components/home/MovieBanner';
import ContinueWatching from '../components/home/ContinueWatching';
import Toolbar from '../components/Toolbar';
import Navbar from '../components/Navbar';

const Home = () => {
  const [showCategory, setshowCategory] = useState(false);
  return (
    <div className={`bg-black pb-80 ${showCategory ? 'h-screen' : 'h-full'}`}>
      <Toolbar
        showCategory={showCategory}
        setShowCategory={setshowCategory}
      />
      <MovieBanner />
      <ContinueWatching />
      <Navbar page="home" />
    </div>
  );
};

export default Home;
