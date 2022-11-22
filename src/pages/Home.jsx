import { useState, useEffect } from 'react';
import MovieBanner from '../components/home/MovieBanner';
import ContinueWatching from '../components/home/ContinueWatching';
import Toolbar from '../components/Toolbar';
import Navbar from '../components/Navbar';
import ListView from '../components/ListView';
import { getTrendingMovieList } from '../api';

const Home = () => {
  const [showCategory, setshowCategory] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    getTrendingMovieList().then((result) => {
      setTrendingMovies(result);
    });
  }, []);

  return (
    <div
      className={`bg-black pb-80 ${
        showCategory ? 'h-screen overflow-y-hidden' : 'h-full'
      }`}
    >
      <Toolbar
        showCategory={showCategory}
        setShowCategory={setshowCategory}
      />
      <MovieBanner />
      <ContinueWatching />
      <ListView
        group={'Trending'}
        movies={trendingMovies}
      />
      <Navbar page="home" />
    </div>
  );
};

export default Home;
