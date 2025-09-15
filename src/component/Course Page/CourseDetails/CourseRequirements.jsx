import * as React from "react";

function CourseRequirements() {
  return (
    <section className="p-8 mt-10 w-full rounded-lg border border-solid border-zinc-800 max-md:px-5 max-md:max-w-full">
      <header>
        <h2 className="text-3xl font-semibold leading-none text-blue-600">
          Course requirements
        </h2>
      </header>
      <div className="flex gap-2 items-center mt-5 w-full text-xl leading-8 text-zinc-400 max-md:max-w-full">
          <ul className="list-disc pl-6 flex-1 shrink self-stretch my-auto basis-0 text-zinc-400 max-md:max-w-full" style={{ listStyleType: 'disc' }}>
            <li style={{ fontSize: '0.95em', paddingLeft: '0.1em',  listStylePosition: 'outside' }}>No prior experience in data analysis or Power BI is needed</li>
            <li style={{ fontSize: '0.95em', paddingLeft: '0.1em', listStylePosition: 'outside' }}>Basic computer skills and internet access</li>
            <li style={{ fontSize: '0.95em', paddingLeft: '0.1em', listStylePosition: 'outside' }}>Willingness to learn and apply data-driven insights to real-world problems</li>
            <li style={{ fontSize: '0.95em', paddingLeft: '0.1em', listStylePosition: 'outside' }}>Curiosity and consistency — that's all you really need!</li>
            <li style={{ fontSize: '0.95em', paddingLeft: '0.1em', listStylePosition: 'outside' }}>Stable internet connection for accessing course materials and Power BI Service</li>
            <li style={{ fontSize: '0.95em', paddingLeft: '0.1em', listStylePosition: 'outside' }}>Basic familiarity with Excel or spreadsheets (helpful but not required)</li>
        </ul>
      </div>
    </section>
  );
}

export default CourseRequirements;
