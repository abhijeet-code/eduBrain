import React from 'react';

function StatsCard({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4 px-5 py-6 rounded-lg border border-blue-600 border-solid bg-[#246bfd]/11 hover:bg-[#246bfd]/20 transition-colors">
      {/* Icon */}
      <div className="flex justify-center items-center shrink-0 bg-blue-600/70 h-14 w-14 rounded-full">
        <img
          src={icon}
          className="object-contain w-7 h-7"
          alt=""
        />
      </div>
      <div className="font-medium flex flex-col items-start justify-center flex-1 min-w-0">
        <p className="text-base text-zinc-400 mb-1 truncate w-full">
          {title}
        </p>
        <p className="text-2xl font-semibold text-blue-600">
          {value}
        </p>
      </div>
    </div>
  );
}

export default StatsCard;
