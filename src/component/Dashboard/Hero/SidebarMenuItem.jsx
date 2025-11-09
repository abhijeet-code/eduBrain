import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SidebarMenuItem({ icon, label }) {
  const location = useLocation();
  const baseClasses = "flex gap-2.5 items-center py-2.5 w-full px-5 ";
  const activeClasses = "rounded-md w-full bg-[#246bfd]/31 bg-opacity-40";
  // Map label to route path
  const routeMap = {
    "Dashboard": "",
    "My courses": "mycourses",
    "Assignments": "assignments",
    "Certificates": "certificate",
    "Resume Builder": "resume-builder",
    "Refer & Earn": "referearn",
    "Mentor Support": "mentor"
  };
  const to = `/profile-dashboard/${routeMap[label]}`;
  // Check if current location matches this route
  const isActive = location.pathname === to || (to === '/profile-dashboard/' && location.pathname === '/profile-dashboard');
  const textClasses = isActive ? "text-white font-semibold" : "text-blue-400";
  return (
    <Link to={to} className={`${baseClasses} ${isActive ? activeClasses  : ''}`}>
            <div className={`flex justify-center items-center shrink-0 w-[34px] h-[34px] rounded-full ${isActive ? 'bg-blue-600/10' : 'bg-blue-600/20'}`}>
            <img
          src={icon}
          className="w-5 h-5"
          alt=""
        />
      </div>
      <span className={`text-lg font-medium ${textClasses}`}>
        {label}
      </span>
    </Link>
  );
}

export default SidebarMenuItem;
