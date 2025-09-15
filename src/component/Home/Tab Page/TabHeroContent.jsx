import React from "react";

function TabHeroContent() {
  return (
    <section className="flex relative flex-col gap-6 items-start w-[745px] max-md:w-full max-md:max-w-[600px] max-sm:gap-4">
      <p className="relative text-2xl leading-8 text-blue-300 max-sm:text-lg max-sm:leading-6">
        Internship Opportunities
      </p>
      <h1 className="relative text-5xl font-bold leading-[57.6px] text-slate-50 max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9">
        How It Propels Your Career?
      </h1>
      <p className="relative self-stretch text-base leading-6 text-zinc-500 max-sm:text-sm max-sm:leading-5">
        Internships aren't just about gaining work experience; they are your
        pathway to professional triumph. Discover how internships with
        Edubraing propels your career.
      </p>
    </section>
  );
}

export default TabHeroContent;
