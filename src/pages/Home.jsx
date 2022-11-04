import React from 'react';
import MovieBanner from '../components/home/MovieBanner';
import ContinueWatching from '../components/home/ContinueWatching';
import Toolbar from '../components/Toolbar';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="bg-black h-screen pb-80 overflow-y-auto">
      <Toolbar />
      <MovieBanner />
      <ContinueWatching />
      <Navbar page="home" />
    </div>
  );
};

export default Home;
