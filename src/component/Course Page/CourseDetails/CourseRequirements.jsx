import * as React from "react";

function CourseRequirements({ course }) {
  if (!course || !course.requirements) return null;
  return (
    <section className="p-8 mt-10 w-full rounded-lg border border-solid border-gray-100 max-md:px-5 max-md:max-w-full">
      <header>
        <h2 className="text-3xl font-semibold leading-none text-[#9411a8]">
          Course requirements
        </h2>
      </header>
      <div className="flex gap-2 items-center mt-5 w-full text-xl leading-8 text-gray-500 max-md:max-w-full">
        <ul className="list-disc pl-6 flex-1 shrink self-stretch my-auto basis-0 text-gray-500 max-md:max-w-full" style={{ listStyleType: 'disc' }}>
          {(course.requirements || []).map((req, index) => (
            <li key={index} style={{ fontSize: '0.95em', paddingLeft: '0.1em', listStylePosition: 'outside' }}>{req}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CourseRequirements;
