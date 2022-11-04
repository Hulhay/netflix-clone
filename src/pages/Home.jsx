import React from 'react';
import MovieBanner from '../components/home/MovieBanner';
import ContinueWatching from '../components/home/ContinueWatching';
import Toolbar from '../components/Toolbar';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="bg-black h-full pb-80">
      <Toolbar />
      <MovieBanner />
      <ContinueWatching />
      <Navbar page="home" />
    </div>
  );
};

export default Home;
