import React from 'react';

const ProcessHeader = () => {
  return (
    <header className="flex absolute left-2/4 flex-col gap-5 items-center -translate-x-2/4 top-[124px] w-[628px] z-[2] max-xl:w-[500px] max-lg:w-[400px] max-md:top-[60px] max-md:w-[98%] max-sm:top-6 max-sm:w-full">
      <p className="text-2xl leading-8 text-blue-300 max-xl:text-xl max-lg:text-lg max-md:text-base max-sm:text-base">
        Process
      </p>
      <h1 className="text-5xl font-bold text-center leading-[57.6px] text-slate-50 max-xl:text-4xl max-xl:leading-[44px] max-lg:text-3xl max-lg:leading-10 max-md:text-2xl max-md:leading-8 max-sm:text-xl max-sm:leading-7">
        Your path to success
      </h1>
    </header>
  );
};

export default ProcessHeader;
