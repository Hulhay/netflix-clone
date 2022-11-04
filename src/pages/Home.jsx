import React from 'react';
import MovieBanner from '../components/MovieBanner';
import Toolbar from '../components/Toolbar';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="bg-black h-screen">
      <Toolbar />
      <MovieBanner />
      <Navbar page="home" />
    </div>
  );
};

export default Home;
