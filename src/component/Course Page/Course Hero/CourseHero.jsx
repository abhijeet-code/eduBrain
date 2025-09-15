import React from 'react';

export const CourseHero= () => {
  return (
  <header className="relative w-full bg-[#0C0C0D]">
      {/* Decorative SVG Elements */}
      <div className='absolute top-0'
        dangerouslySetInnerHTML={{
          __html:
            "<svg id=\"537:744\" width=\"426\" height=\"116\" viewBox=\"0 0 426 116\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"vector-decoration-1\" style=\"display: flex; width: 426px; height: 116px; padding: 0.809px 0 2.018px 0; justify-content: center; align-items: center; flex-shrink: 0; position: absolute; left: 998px; top: 2262px\"> <g clip-path=\"url(#clip0_537_744)\"> <path d=\"M423.968 20.6016H306.552L292.319 35.8266H189.644L158.129 62.7241H62.5697M423.968 32.2741H318.751L302.485 48.5141H197.776L168.803 76.4266H94.5923L77.3103 91.6516H24.4475L1.57422 72.3666M426.001 45.9766H323.834L311.126 62.7241H206.417L173.886 91.6516H94.5923L74.2605 113.982M426.001 59.1716H335.016L315.193 81.5016H284.187L275.037 91.6516H232.849M384.321 0.809082H299.435L280.12 17.5566H216.583\" stroke=\"url(#paint0_linear_537_744)\" stroke-opacity=\"0.2\" stroke-width=\"0.6\"></path> </g> <defs> <linearGradient id=\"paint0_linear_537_744\" x1=\"122.04\" y1=\"57.1416\" x2=\"425.99\" y2=\"25.0699\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#04D5FF\"></stop> <stop offset=\"1\" stop-color=\"#246BFD\"></stop> </linearGradient> <clipPath id=\"clip0_537_744\"> <rect width=\"426\" height=\"116\" fill=\"white\"></rect> </clipPath> </defs> </svg>",
        }}
      />

      <div
        dangerouslySetInnerHTML={{
          __html:
            "<svg id=\"537:746\" width=\"425\" height=\"116\" viewBox=\"0 0 425 116\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"vector-decoration-2\" style=\"display: flex; width: 425px; height: 116px; padding: 0.81px 1.57px 2.017px 0; justify-content: center; align-items: center; flex-shrink: 0; position: absolute; left: 0px; top: 226px\"> <path d=\"M2.02841 94.1901H119.169L133.368 78.9651H235.803L267.243 52.0676H362.578M2.02841 82.5176H106.999L123.226 66.2776H227.689L256.594 38.3651H330.631L347.872 23.1401H400.611L423.43 42.4251M0 68.8151H101.928L114.605 52.0676H219.068L251.523 23.1401H330.631L350.915 0.810089M0 55.6201H90.7713L110.548 33.2901H141.482L150.609 23.1401H192.699M41.5824 113.983H126.268L145.538 97.2351H208.926\" stroke=\"url(#paint0_linear_537_746)\" stroke-opacity=\"0.2\" stroke-width=\"0.6\"></path> <defs> <linearGradient id=\"paint0_linear_537_746\" x1=\"303.247\" y1=\"57.6501\" x2=\"-0.00521567\" y2=\"89.573\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#04D5FF\"></stop> <stop offset=\"1\" stop-color=\"#246BFD\"></stop> </linearGradient> </defs> </svg>",
        }}
      />


      {/* Hero Section */}
      <section className="flex flex-col gap-9 items-center px-4 md:px-5 py-12 md:py-20  w-full">
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-center text-white leading-10 sm:leading-[55px] md:leading-[80px] max-w-[824px] font-semibold">
          Are you Ready to become Master in Power BI?
        </h1>
        <div className="flex flex-col gap-3.5 items-center w-full">
          <div className="flex flex-row gap-4 sm:gap-7 items-center w-full max-w-[400px] justify-center ">
            <button className="flex gap-3.5 justify-center items-center px-6 py-3 bg-white rounded-xl w-fit min-w-fit max-w-[180px]">
              <span className="text-base font-medium leading-6 text-black">Enrol Now</span>
            </button>
            <button className="flex gap-3.5 justify-center items-center px-5 py-3 rounded-xl border border-white border-solid w-fit min-w-[120px] max-w-[180px]">
              <span className="text-base font-medium leading-6 text-white">See the curriculum</span>
            </button>
          </div>
            <div className="flex gap-2 items-end mt-2">
              <span className="text-base sm:text-xl font-bold leading-7 text-white">₹2700</span>
              <span className="text-xs sm:text-sm leading-6 text-zinc-400 flex gap-2"> <span className='line-through'>₹2999</span>
            (10% OFF)</span>
            </div>
        </div>
      </section>

      {/* overview section  */}
      <section className="flex flex-col gap-6 md:gap-8 px-4 md:px-5 py-8 md:py-12 mx-auto my-0 w-full max-w-[1076px]">
        <div className="flex flex-col gap-4 md:gap-8 items-start pb-5 md:pb-7 w-full border-b-2 border-solid border-b-neutral-700">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-7 text-white">
            Powerful Data Analysis with Power BI: From Beginner to Pro
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl leading-7 sm:leading-9 text-zinc-400">
            Unlock the full potential of your data! Master Power BI for insightful data analysis and stunning visualizations that drive smarter decisions.
          </p>
        </div>
        <div className="flex flex-col w-full gap-2 ">
          <div className="flex gap-2 items-center px-3 py-1 rounded-xl bg-[#1545C233] bg-opacity-20 w-full sm:w-fit">
            <p className="text-xs sm:text-sm leading-5 text-white">
              <strong>No prior technical knowledge</strong> required to successfully engage with the course.
            </p>
          </div>
          <div className="flex gap-2 items-center px-3 py-1 rounded-xl bg-[#1545C233] bg-opacity-20 w-full sm:w-fit">
            <p className="text-xs sm:text-sm leading-5 text-white">
              All lectures are pre-recorded for <strong>flexible</strong>, <strong>self-paced learning</strong>.
            </p>
          </div>
        </div>
      </section>
    </header>
  );
};

export default CourseHero