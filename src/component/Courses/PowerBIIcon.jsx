import React from 'react';

const PowerBIIcon = () => {
  return (
    <div className="flex justify-center items-center bg-black rounded-lg h-[60px] w-[60px] max-sm:h-[50px] max-sm:w-[50px]">
      <div className="relative w-10 h-10 bg-amber-300 rounded max-sm:text-3xl max-sm:h-[50px] max-sm:w-[50px]">
        <div className="absolute top-2 left-2 w-1.5 h-6 bg-black rounded-sm max-sm:h-[50px] max-sm:w-[50px]" />
        <div className="absolute top-3 left-4 w-1.5 h-5 bg-black rounded-sm" />
        <div className="absolute top-4 left-6 w-1.5 h-4 bg-black rounded-sm" />
        <div className="absolute top-5 left-8 w-1.5 h-3 bg-black rounded-sm max-sm:text-3xl" />
      </div>
    </div>
  );
};

export default PowerBIIcon;
