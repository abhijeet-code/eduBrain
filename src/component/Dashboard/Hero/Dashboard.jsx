"use client";
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function Dashboard({ onLogout }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.min(0.95, 0.11 + (scrollY / 200) * 0.84);
      setOpacity(newOpacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden relative bg-gray-50 min-h-screen font-sans">
      <div className="w-full h-[80px]" />

      <div className="w-full flex">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-10 md:hidden backdrop-blur-sm"
            aria-hidden="true"
          ></div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 md:ml-[20%] w-full min-w-0 bg-gray-50 min-h-[calc(100vh-80px)]">
          <Outlet />
        </div>
      </div>

      {/* Navbar */}
      <Navbar
        onLogout={onLogout}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
}

export default Dashboard;
