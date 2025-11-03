import * as React from "react";

function CourseDescription({course} ) {
  if (!course) return null;
  return (
    <section className="p-8 mt-10 w-full rounded-lg border border-solid border-zinc-800 max-md:px-5 max-md:max-w-full">
      <header>
        <h2 className="text-3xl font-semibold leading-none text-blue-600">
          Description
        </h2>
      </header>
      <div className="flex gap-2 items-center mt-5 w-full text-xl leading-8 text-zinc-400 max-md:max-w-full">
        <p className="flex-1 shrink self-stretch my-auto basis-0 text-zinc-400 max-md:max-w-full">
          {course.longDescription}
        </p>
      </div>
    </section>
  );
}

export default CourseDescription;
