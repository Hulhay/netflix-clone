import React from 'react';
import Navbar from '../components/Navbar';

const NowWatching = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <p className="text-xl text-quartz text-center">Now Watching Page</p>
      <Navbar page="nowWatching" />
    </div>
  );
};

export default NowWatching;
