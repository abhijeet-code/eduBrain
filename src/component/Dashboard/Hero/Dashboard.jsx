"use client";
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import BackgroundSvg from '../../Contact Us/BackgroundSvg';


function Dashboard() {
  const [opacity, setOpacity] = useState(0.11);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Opacity increases from 0.11 to 0.95 as you scroll down (max at 200px)
      const newOpacity = Math.min(0.95, 0.11 + (scrollY / 200) * 0.84);
      setOpacity(newOpacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden relative bg-[#0c0c0d]">
      <div className="flex z-0 w-full min-h-[89px] max-md:max-w-full" />
      <div className="z-0 w-full shadow-sm bg-blend-normal bg-[#0c0c0d] max-md:max-w-full min-h-screen">
        <div className="flex w-full">
          <Sidebar opacity={opacity} />
          <div className='fixed'><BackgroundSvg/></div>
          <div className="flex-1 ml-[22%]">
            <Outlet />
          </div>
        </div>
      </div>
      <Navbar opacity={opacity} />
    </div>
  );
}

export default Dashboard;
