import React from 'react';

function CourseCard({ title, enrollmentDate, progress }) {
  return (
    <div className="px-4 py-4 rounded-md border border-blue-600 border-solid bg-[#246bfd]/21  bg-opacity-10 min-w-60 w-[350px]">
      <h3 className="text-lg font-medium leading-5 text-white">
        {title}
      </h3>
      <div className="flex flex-col mt-3 w-full">
        <div className="flex gap-2 items-center self-start text-xs leading-5 text-blue-600">
          <img
            src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/72debafd6f9c76659075d6c0e3253f76838f5e0b?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
            alt=""
          />
          <span className="self-stretch my-auto text-blue-600 text-ellipsis w-[272px]">
            Enrolled on {enrollmentDate}
          </span>
        </div>
        <div className="flex gap-1.5 items-center mt-1.5 w-full">
          <div className="flex overflow-hidden flex-col flex-1 shrink items-start self-stretch my-auto bg-gray-100 rounded-md basis-0 min-w-60">
            <div
              className="flex shrink-0 h-1.5 bg-emerald-500 rounded-md"
              style={{ width: `${(progress / 100) * 165}px` }}
            />
          </div>
          <span className="self-stretch my-auto text-xs font-medium leading-none text-right text-white">
            {progress}%
          </span>
        </div>
      </div>
      <div className="flex gap-2.5 items-start mt-3 w-full text-base leading-tight whitespace-nowrap">
        <button className="flex flex-1 shrink gap-2.5 justify-center items-center px-8 py-3 text-blue-600 rounded-md border border-blue-600 border-solid basis-0 min-h-[45px] max-md:px-5">
          <span className="self-stretch my-auto text-blue-600">
            Resume
          </span>
          <img
            src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/9098b40a75750f3b763bdd055f5779f789797781?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt=""
          />
        </button>
        <button className="flex flex-1 shrink gap-2.5 justify-center items-center px-8 py-3 text-white bg-blue-600 rounded-md basis-0 min-h-[45px] max-md:px-5">
          <span className="self-stretch my-auto">
            Certificate
          </span>
          <img
            src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/13e049a96a8e81e8f0d0cb12baf76de160c60c14?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
