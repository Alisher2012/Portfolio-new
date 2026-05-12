import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import MusicPlayer from '../components/MusicPlayer';

const Layout = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <Outlet />
      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default Layout;
