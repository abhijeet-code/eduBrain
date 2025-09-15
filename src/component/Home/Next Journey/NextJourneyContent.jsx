import React from 'react';

function NextJourneyContent() {
  return (
    <>
      <header className="flex absolute top-16 left-16 flex-col shrink-0 gap-0 items-start py-0 pr-28 pl-0 h-[116px] w-[624px] max-md:left-10 max-md:top-[50px] max-md:w-[500px] max-sm:relative max-sm:top-auto max-sm:left-auto max-sm:order-2 max-sm:p-0 max-sm:mb-5 max-sm:w-full max-sm:text-center">
        <h1 className="text-5xl font-bold leading-[57.6px] text-neutral-900 max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9 max-sm:text-center">
          Take the Next Step in
        </h1>
        <h2 className="text-5xl font-bold leading-[57.6px] text-neutral-900 max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9 max-sm:text-center ">
          Your Tech Journey.
        </h2>
      </header>

      <section className="flex absolute left-16 flex-col shrink-0 gap-0 items-start py-0 pr-11 pl-0 h-16 top-[199px] w-[624px] max-md:left-10 max-md:top-40 max-md:w-[500px] max-sm:relative max-sm:top-auto max-sm:left-auto max-sm:order-3 max-sm:p-0 max-sm:mb-8 max-sm:w-full max-sm:text-center">
        <p className="text-2xl leading-8 text-neutral-600 max-md:text-xl max-md:leading-7 max-sm:text-base max-sm:leading-6 max-sm:text-center">
          Revolutionize Your Learning Journey with AI-Enhanced
        </p>
        <p className="text-2xl leading-8 text-neutral-600 max-md:text-xl max-md:leading-7 max-sm:text-base max-sm:leading-6 max-sm:text-center">
          Courses!
        </p>
      </section>

      <nav className="flex md:absolute md:left-16 justify-center items-center pt-3.5 md:pr-24 pb-3.5 md:pl-24 rounded-lg cursor-pointer bg-neutral-950 h-[52px] top-[302px] w-[300px] max-md:left-10 max-md:top-[250px] max-md:w-[250px] max-sm:relative max-sm:top-auto max-sm:left-auto max-sm:order-4 max-sm:mx-auto max-sm:my-0 max-sm:w-[200px]">
        <button className="w-full text-lg font-bold leading-6 h-[25px] text-slate-50 text-nowrap ">
          Explore Now!
        </button>
      </nav>
    </>
  );
}

export default NextJourneyContent;
