import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SidebarMenuItem({ icon, label }) {
  const location = useLocation();
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
  const baseClasses = "flex gap-3 items-center py-3 px-4 mx-2 rounded-lg transition-all duration-200 font-medium group";

  // Active: Soft purple bg, Dark purple text
  const activeClasses = "bg-[#9411a8]/10 text-[#9411a8] shadow-sm";

  // Inactive: Gray text, hover turns slightly purple
  const inactiveClasses = "text-gray-500 hover:bg-[#9411a8]/5 hover:text-[#9411a8]";
  return (
    <Link
      to={to}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {/* Icon Container */}
      <div className={`flex justify-center items-center shrink-0 w-8 h-8 rounded-lg transition-colors ${isActive ? 'bg-white' : 'bg-gray-100 group-hover:bg-white'}`}>
        <img
          src={icon}
          className="w-5 h-5 object-contain"
          alt=""
          // This filter tints the icons purple to match your theme
          style={{ filter: isActive || "group-hover" ? "brightness(0) saturate(100%) invert(16%) sepia(63%) saturate(4436%) hue-rotate(283deg) brightness(92%) contrast(113%)" : "grayscale(100%) opacity(0.6)" }}
        />
      </div>

      {/* Label */}
      <span className="text-sm lg:text-base">
        {label}
      </span>
    </Link>
  );
}

export default SidebarMenuItem;
