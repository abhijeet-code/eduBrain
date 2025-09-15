import React from "react";

export default function CircleImages() {
  return (
    <div className="relative flex items-center justify-center w-[420px] h-[420px] mx-auto">
      {/* Outer Circle - smaller */}
      <div className="absolute w-[320px] h-[320px] rounded-full border-2 border-cyan-400"></div>

      {/* MacBook (Left) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <div className="bg-white p-2 rounded-full shadow-lg w-[140px] h-[140px] flex items-center justify-center">
          <img
            src="/mac.png"
            alt="MacBook"
            className="max-w-[120%] max-h-[150%] object-contain"
          />
        </div>
      </div>

      {/* iPhone (Bottom) */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
        <div className="bg-white p-2 rounded-full shadow-lg w-[80px] h-[80px] flex items-center justify-center">
         <img
            src="/iphone.png"
            alt="Watch"
            className="max-w-[100%] max-h-[200%] object-cover"
          />
        </div>
      </div>

      {/* Watch (Top Right) - larger and more centered */}
      <div className="absolute top-2 left-[70%] -translate-x-1/2">
        <div className="bg-white p-2 rounded-full shadow-lg w-[100px] h-[100px] flex items-center justify-center">
          <img
            src="/applewatch.png"
            alt="Watch"
            className="max-w-[100%] max-h-[100%] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
