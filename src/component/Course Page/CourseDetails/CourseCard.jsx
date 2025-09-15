

import * as React from "react";

function CourseCard() {
  const courseFeatures = [
    "76 Lectures",
    "30h+ content",
    "Lifetime access",
    "Certificate of completion"
  ];

  return (
  <article className="w-full max-w-[406px] min-w-60 rounded-lg border border-solid shadow-sm bg-blend-normal bg-neutral-950 border-zinc-800 mx-auto md:max-w-full md:w-full md:min-w-0 md:mx-auto">
    <div className="flex overflow-hidden relative flex-col px-2 pt-2 pb-32 sm:px-2.5 sm:pt-2.5 sm:pb-44 w-full text-xs font-bold leading-none rounded-lg bg-blend-normal aspect-[1.906] max-md:pb-24">
      <img src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/3719a5aec29253617aeee99fefdefb369506eacb?placeholderIfAbsent=true" className="object-cover absolute inset-0 size-full" alt="Course thumbnail" />
      <div className="flex relative gap-10 justify-between items-center mb-0 w-full max-md:mb-2.5">
        <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch px-2.5 py-1.5 my-auto text-white bg-red-500 rounded">
          <span className="self-stretch my-auto">10% OFF</span>
        </div>
        <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch px-2.5 py-1.5 my-auto text-black whitespace-nowrap bg-white rounded">
          <span className="self-stretch my-auto">Featured</span>
        </div>
      </div>
    </div>
    <div className="px-2 sm:px-4 py-4 sm:py-5 w-full">
      <div className="w-full">
        <div className="w-full">
          <div className="flex gap-2 items-end w-full whitespace-nowrap bg-blend-normal">
            <span className="text-lg sm:text-xl font-extrabold leading-snug text-white">₹2700</span>
            <span className="text-xs sm:text-sm leading-6 line-through text-zinc-400">₹2999</span>
          </div>
          <div className="flex flex-col mt-2.5 w-full">
            <a href="/billing" className="flex gap-2.5 justify-center items-center px-4 sm:px-8 md:px-16 py-2 w-full text-sm sm:text-base text-black bg-white rounded-lg bg-blend-normal max-md:px-3">
              <span className="self-stretch my-auto">Buy Now</span>
            </a>
            <p className="self-start mt-2 text-xs sm:text-sm text-center text-ellipsis text-zinc-400">Purchase this course to get access</p>
          </div>
        </div>
      </div>
      <div className="mt-3.5 text-lg sm:text-xl font-medium leading-none text-white">This course includes</div>
      <div className="flex flex-col items-start pb-3.5 mt-3.5 w-full text-xs sm:text-sm leading-none border-b border-zinc-800 text-zinc-400">
        {courseFeatures.map((feature, index) => (
          <div key={index} className="flex gap-1 items-center mt-1.5 first:mt-0">
            <img src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/860ed8182eff836e9b87c5779e8f4d240fbc61ac?placeholderIfAbsent=true" className="object-contain shrink-0 self-stretch my-auto w-3 sm:w-4 aspect-square" alt="" />
            <span className="self-stretch my-auto text-ellipsis text-zinc-400 w-full text-xs sm:text-sm">{feature}</span>
          </div>
        ))}
      </div>
      <button className="flex gap-2.5 justify-center items-center py-2 pr-3 pl-3 mt-3.5 max-w-full text-xs sm:text-base text-black whitespace-nowrap bg-white rounded-lg bg-blend-normal w-[80px] sm:w-[100px]">
        <img src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/4007ac1100f823bcaf6531e37e3e00a84902b244?placeholderIfAbsent=true" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="" />
        <span className="self-stretch my-auto">Share</span>
      </button>
    </div>
  </article>
  );
}

export default CourseCard;
