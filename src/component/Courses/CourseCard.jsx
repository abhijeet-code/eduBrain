import React from 'react';
import PowerBIIcon from './PowerBIIcon';
import CourseFeature from './CourseFeature';


const CourseCard = ({
  title,
  description,
  features,
  currentPrice,
  originalPrice,
  discountPercentage,
  isFeatured = true
}) => {
// Utility to fix SVG attributes for React
function fixSvgAttributes(svgString) {
  return svgString
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stop-color/g, 'stopColor')
    .replace(/fill-opacity/g, 'fillOpacity')
    .replace(/flood-opacity/g, 'floodOpacity')
    .replace(/color-interpolation-filters/g, 'colorInterpolationFilters');
}

  return (
  <article className="relative rounded-xl bg-[#0E121B] border border-[rgb(46,46,46)] overflow-hidden 
  max-sm:w-[90%] max-sm:max-w-[320px] max-sm:mx-auto max-sm:px-3  max-sm:py-2 max-sm:rounded-lg">

      <header className="flex relative justify-center items-center h-[200px]">
        <div className="absolute top-3 right-2 py-2 text-xs font-semibold bg-rose-500 rounded text-[white]">
          {discountPercentage} Off
        </div>
        {isFeatured && (
          <div className="absolute top-3 right-2 px-2 py-2 px-3 text-xs font-semibold bg-green-500 rounded text-[white]">
            Featured
          </div>
        )}
        <div className="flex gap-3 items-center max-sm:gap-2">
          <img src="/powerbi.png" alt="Course" className=" object-contain rounded" />
        </div>
      </header>

  <div className="p-6 max-sm:px-2 max-sm:py-3">
  <h2 className="mb-3 text-lg font-semibold leading-6 text-slate-50 max-sm:text-base">
          {title}
        </h2>
  <p className="mb-5 text-sm leading-5 text-zinc-400 max-sm:text-xs">
          {description}
        </p>

  <div className="flex flex-wrap mb-6 max-sm:gap-2">
          {features.map((feature, index) => (
            <span key={index} className="flex items-center gap-1 text-zinc-400 px-2 py-1 rounded -ml-2 text-sm font-medium max-sm:text-xs">
              {feature}
            </span>
          ))}
        </div>

        <div className="flex gap-2 items-center mb-5">
          <span className="text-xl font-bold text-slate-50 max-sm:text-base">{currentPrice}</span>
          <span className="text-md line-through text-zinc-400 max-sm:text-xs">{originalPrice}</span>
          <span className="text-xs text-green-400">10% OFF</span>
        </div>

  <a href="/course-details" className="p-3 w-full text-base font-semibold rounded-lg cursor-pointer bg-slate-50 border-[none] text-neutral-950 max-sm:text-sm max-sm:p-2 max-sm:rounded-md">
          View Course
        </a>
      </div>
    </article>
  );
};

// Patch DecorativeVectors if used inline in this file (for example, if you have SVGs with dangerouslySetInnerHTML)
// Example usage:
// <div dangerouslySetInnerHTML={{ __html: fixSvgAttributes(svgString) }} />

export default CourseCard;
