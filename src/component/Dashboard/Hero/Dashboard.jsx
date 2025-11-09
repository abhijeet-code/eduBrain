"use client";
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const BackgroundSvg = () => (
  <svg width="100vw" height="100vh" className="fixed top-0 left-0 -z-10">
      <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{stopColor: 'rgba(12, 12, 13, 0.3)', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: 'rgba(12, 12, 13, 0)', stopOpacity: 1}} />
          </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad1)" />
  </svg>
);

function Dashboard({onLogout}) {
  const [opacity, setOpacity] = useState(0.11);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    <div className="overflow-x-hidden relative bg-[#0c0c0d] text-white">
      <div className=" w-full h-[89px]" />
      <div className=" w-full shadow-sm bg-blend-normal bg-[#0c0c0d] min-h-screen">
        <div className="flex w-full">
          <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          {isSidebarOpen && (
            <div
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 z-10 md:hidden"
              aria-hidden="true"
            ></div>
          )}
          <div className='fixed -z-10'><BackgroundSvg/></div>
          <div className="flex-1 md:ml-[20%] w-full min-w-0">
            <Outlet />
          </div>
        </div>
      </div>
      <Navbar opacity={opacity} onLogout={onLogout} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </div>
  );
}

export default Dashboard;
