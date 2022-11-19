import { useState } from 'react';
import MovieBanner from '../components/home/MovieBanner';
import ContinueWatching from '../components/home/ContinueWatching';
import Toolbar from '../components/Toolbar';
import Navbar from '../components/Navbar';
import ListView from '../components/ListView';

const Home = () => {
  const titleListView = [
    'Populer',
    'New Movies',
    'Indonesian Movies',
    'New Release',
    'Anime',
    'My List',
    'Horror',
  ];
  const [showCategory, setshowCategory] = useState(false);
  return (
    <div className={`bg-black pb-20 ${showCategory ? 'h-screen' : 'h-full'}`}>
      <Toolbar
        showCategory={showCategory}
        setShowCategory={setshowCategory}
      />
      <MovieBanner />
      <ContinueWatching />
      {titleListView.map((titleListView) => (
        <ListView titleListView={titleListView} />
      ))}
      <Navbar page="home" />
    </div>
  );
};

export default Home;
