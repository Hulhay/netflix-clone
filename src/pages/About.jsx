import React from 'react';
import Navbar from '../components/Navbar';

const More = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <p className="text-xl text-quartz text-center">About Page</p>
      <Navbar page="more" />
    </div>
  );
};

export default More;
