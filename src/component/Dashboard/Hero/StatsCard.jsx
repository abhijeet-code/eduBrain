import React from 'react';

function StatsCard({ icon, title, value }) {
  return (
    <div className="flex  items-center  px-5 py-6 rounded border border-blue-600 border-solid bg-[#246bfd]/11 bg-opacity-10 w-[220px] h-[100px] min-w-[280px] min-h-[100px]">
      <div className="flex justify-center items-center mb-2 bg-[rgba(36,107,253,0.7)] bg-opacity-20 h-[50px] w-[50px] rounded-full">
        <img
          src={icon}
          className="object-contain w-[34px] h-[34px]"
          alt=""
        />
      </div>
      <div className="text-center font-medium flex flex-col items-center justify-center flex-1">
        <p className="text-lg leading-none text-zinc-400 mb-1">
          {title}
        </p>
        <p className="text-2xl leading-none text-blue-600">
          {value}
        </p>
      </div>
    </div>
  );
}

export default StatsCard;
