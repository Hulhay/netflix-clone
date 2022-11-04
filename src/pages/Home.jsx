import React from 'react';
import MovieBanner from '../components/MovieBanner';
import Toolbar from '../components/Toolbar';
import Navbar from '../components/Navbar';
import CategoryMovie from '../components/CategoryMovie';

const Home = () => {
  return (
    <div className="bg-black h-screen">
      <Toolbar />
      <MovieBanner />
      <Navbar />
    </div>
  );
};

export default Home;
