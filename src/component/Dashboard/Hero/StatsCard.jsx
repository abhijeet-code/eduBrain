import React from 'react';

function StatsCard({ icon, title, value }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 px-6 py-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">      {/* Icon Container */}
      <div className="flex justify-center items-center shrink-0 bg-[#9411a8]/10 h-12 w-12 rounded-full text-[#9411a8]">
        <img
          src={icon}
          className="object-contain w-7 h-7 opacity-80" // Slightly transparent to blend better
          alt=""
          style={{ filter: "brightness(0) saturate(100%) invert(22%) sepia(55%) saturate(4456%) hue-rotate(283deg) brightness(89%) contrast(98%)" }}
        // The filter attempts to tint the icon purple. Remove if you upload colored icons.
        />
      </div>

      <div className="font-medium flex flex-col items-start justify-center flex-1 min-w-0">
        <p className="text-sm text-text-secondary mb-1 truncate w-full font-medium">
          {title}
        </p>
        <p className="text-2xl font-bold text-text-primary">
          {value}
        </p>
      </div>
    </div>
  );
}

export default StatsCard;
