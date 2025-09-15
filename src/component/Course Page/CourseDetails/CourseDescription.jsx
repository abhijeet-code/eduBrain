import * as React from "react";

function CourseDescription() {
  return (
    <section className="p-8 mt-10 w-full rounded-lg border border-solid border-zinc-800 max-md:px-5 max-md:max-w-full">
      <header>
        <h2 className="text-3xl font-semibold leading-none text-blue-600">
          Description
        </h2>
      </header>
      <div className="flex gap-2 items-center mt-5 w-full text-xl leading-8 text-zinc-400 max-md:max-w-full">
        <p className="flex-1 shrink self-stretch my-auto basis-0 text-zinc-400 max-md:max-w-full">
          Ready to dive into the world of Data Analytics with Power BI?
          This all-in-one Job-Ready Power BI Course is designed for
          beginners and intermediate learners who want to master business
          intelligence tools and become industry-ready with hands-on
          dashboard-building and data visualization experience.
        </p>
      </div>
    </section>
  );
}

export default CourseDescription;
