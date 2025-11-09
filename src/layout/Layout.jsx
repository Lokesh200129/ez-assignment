import React from 'react';
import { Outlet } from 'react-router-dom';
import heroBg from '../assets/hero/hero-bg.png';
import Navbar from '../component/Navbar';

const Layout = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <main
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;