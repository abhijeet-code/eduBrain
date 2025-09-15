import React from 'react';
import CourseIcon from './CourseIcon';

const CourseCard = ({ course }) => {
  const {
    image,
    icon,
    title,
    description,
    lectures,
    duration,
  originalPrice,
  discountedPrice,
  discount
  } = course;

  return (
  <article className="flex relative flex-col justify-between items-start bg-white rounded-lg shadow-md h-[592px] w-[286px] max-md:w-[280px] max-sm:w-full max-sm:max-w-none max-sm:px-0" style={{maxWidth: '100vw'}}>
      {image.isSpecial ? (
        <div className="flex overflow-hidden relative justify-center items-center h-48 rounded-[8px_8px_0_0] w-[286px] max-md:w-[280px] max-sm:w-full">
          <img
            src={image.src}
            alt=""
            className="object-cover absolute top-0 w-80 h-48 aspect-[5/3] left-[-17px]"
          />
        </div>
      ) : (
        <img
          src={image.src}
          alt=""
          className="object-cover h-48 rounded-[8px_8px_0_0] w-[286px] max-md:w-[280px] max-sm:w-full"
        />
      )}

  <div className="box-border flex flex-col flex-1 justify-between p-6 w-[286px] max-md:w-[280px] max-sm:p-5 max-sm:w-full max-sm:max-w-none">
  <div className="flex relative flex-col justify-between items-center h-full min-h-[340px]">
          <CourseIcon iconSvg={icon} />

          {title.isMultiLine ? (
            <header className="flex flex-col items-center mb-2 w-full">
              <h2 className="text-xl font-bold leading-7 text-center text-black w-full max-w-[220px] mx-auto">
                {title.line1}
              </h2>
              <h2 className="text-xl font-bold leading-7 text-center text-black w-full max-w-[220px] mx-auto">
                {title.line2}
              </h2>
            </header>
          ) : (
            <h2 className="mb-2 text-xl font-bold leading-7 text-center text-black w-full max-w-[220px] mx-auto">
              {title.text}
            </h2>
          )}

          <div className="flex flex-col flex-1 items-center mb-4 text-center min-h-[48px] max-h-[48px] w-full max-w-[220px] justify-center overflow-hidden">
            <p className="text-base leading-6 text-black w-full text-wrap overflow-hidden line-clamp-2" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
              {Array.isArray(description) ? description.join(' ') : description}
            </p>
          </div>

          <div className="flex justify-between items-center mb-4 w-full max-sm:flex-col max-sm:gap-2 max-sm:items-start">
            <div className="flex gap-1 items-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 14px; height: 14px">
                    <path d="M8.17153 2.63037H1.16181C0.520139 2.63037 0 3.15051 0 3.79218V10.8019C0 11.4436 0.520139 11.9637 1.16181 11.9637H8.17153C8.8132 11.9637 9.33333 11.4436 9.33333 10.8019V3.79218C9.33333 3.15051 8.8132 2.63037 8.17153 2.63037ZM12.775 3.54669L10.1111 5.38419V9.20989L12.775 11.045C13.2903 11.3998 14 11.0377 14 10.4179V4.17377C14 3.55641 13.2927 3.19183 12.775 3.54669Z" fill="black"></path>
                  </svg>`
                }}
              />
              <span className="text-sm leading-5 text-black">{lectures} Lectures</span>
            </div>
            <span className="text-sm leading-5 text-black">{duration}</span>
          </div>

          <div className="flex relative gap-2 justify-center items-center mb-4 w-full max-sm:flex-wrap max-sm:gap-1">
            <span className="text-base leading-6 text-black line-through">₹2999</span>
            <span className="text-xl font-bold leading-7 text-black">₹2700</span>
            <span className="inline-flex justify-center items-center px-2 py-1 rounded-full shadow-sm bg-white bg-opacity-0">
              <span className="text-xs leading-4 text-green-600">10% OFF</span>
            </span>
          </div>

          <button className="flex justify-center items-center px-16 pt-3 pb-3 w-full bg-gray-900 rounded-lg transition-all cursor-pointer border-[none] duration-[0.2s] ease-[ease]">
            <span className="text-base leading-6 text-blue-300">
              Let's Explore It
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
