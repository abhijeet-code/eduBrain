import * as React from "react";
import LearningObjectives from "./LearningObjective";

function CourseOverview() {
  return (
    <section className="p-4 md:p-8 w-full rounded-lg border border-solid border-zinc-800 max-md:max-w-full overflow-x-hidden mx-auto flex flex-col items-center justify-center">
      <div className="w-full max-md:max-w-full flex flex-col items-center justify-center px-4 md:px-5 overflow-x-hidden">
        <header>
          <h1 className="text-2xl md:text-3xl font-semibold leading-none text-blue-600 max-md:max-w-full">
            Understanding Power BI
          </h1>
          <p className="mt-3 md:mt-5 mx-auto  text-lg md:text-xl leading-7 text-wrap text-zinc-400 ">
            Explore the comprehensive learning experience awaiting you on this course detail page. From fundamental concepts to advanced techniques, discover what you will learn and how it will propel your skills to new heights.
          </p>
          <LearningObjectives/>
        </header>
      </div>
    </section>
  );
}

export default CourseOverview;
