 import React from 'react';
 import { Link } from 'react-router-dom';
import BackgroundSVG from './Faq/BackgroundSVG'
      
      const FinalAreU = ({ course,isLoggedIn }) => {
        if (!course) return null;
        const handleScrollToCurriculum = () => {
          const element = document.getElementById('curriculum');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        };
        return (
          <div className='flex relative flex-col items-center pb-0 w-full '>
            <BackgroundSVG position="left" />
            <BackgroundSVG position="right" />
            <section className="flex flex-col gap-9 items-center px-4 md:px-5 py-12 md:py-20  w-full">
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-center text-white leading-10 sm:leading-[55px] md:leading-[80px] max-w-[824px] font-semibold">
        {course.heroTitle}
        </h1>
        <div className="flex flex-col gap-3.5 items-center w-full">
          <div className="flex flex-row gap-4 sm:gap-7 items-center w-full max-w-[400px] justify-center ">
            <Link
            to = {`/billing?course=${course._id}`} className="flex gap-3.5 justify-center items-center px-6 py-3 bg-white rounded-xl w-fit min-w-fit max-w-[180px]">
              <span className="text-base font-medium leading-6 text-black">Enroll Now</span>
            </Link>
            <button
            onClick={handleScrollToCurriculum} className="flex gap-3.5 justify-center items-center px-5 py-3 rounded-xl border border-white border-solid w-fit min-w-[120px] max-w-[180px]">
              <span className="text-base font-medium leading-6 text-white">See the curriculum</span>
            </button>
          </div>
          {isLoggedIn && (
          <div className="flex gap-2 items-end mt-2">
            <span className="text-base sm:text-xl font-bold leading-7 text-white">₹{course.price}</span>
            {course.originalPrice && course.discountPercentage && (
            <span className="text-xs sm:text-sm leading-6 text-zinc-400 flex gap-2"> <span className='line-through'>₹{course.originalPrice}</span>
          (LIMITED TIME OFFER)</span>)}
          </div>)}
        </div>
      </section>
          </div>
        )
      }
      
      export default FinalAreU
      