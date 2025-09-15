import React from "react";

import { useState } from "react";
import TabButton from "./TabButton";
function TabSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Practical Application",
      content: (
        <>
          <p className="relative text-sm leading-5 text-zinc-400">
            An internship with Edubraining transforms your resume into a
            powerhouse, showcasing your ability to thrive
          </p>
          <p className="relative text-sm leading-5 text-zinc-400">
            professionally. This distinguished experience highlights your
            practical skills, industry knowledge, and adaptability,
          </p>
          <p className="relative text-sm leading-5 text-zinc-400">
            setting you apart from other candidates. Potential employers
            value hands-on experience, and your internship with
          </p>
          <p className="relative text-sm leading-5 text-zinc-400">
            Edubraining demonstrates your commitment to personal and
            professional growth. It's not just a line on your
          </p>
          <p className="relative text-sm leading-5 text-zinc-400">
            resume; it's a testament to your readiness to excel in the
            workforce.
          </p>
        </>
      )
    },
    {
      title: "Industry Networking",
      content: null
    },
    {
      title: "Resume Powerhouse",
      content: null
    },
    {
      title: "Skill Refinement",
      content: null
    },
    {
      title: "Exclusive Opportunities",
      content: null
    }
  ];

  return (
  <section className="flex relative flex-col gap-6 items-center w-full max-w-2xl mx-auto max-md:w-full max-sm:gap-4">
      {tabs.map((tab, index) => (
        <TabButton
          key={index}
          title={tab.title}
          isActive={index === activeTab}
          isExpanded={index === activeTab && tab.content}
          onClick={() => setActiveTab(index)}
        >
          {tab.content}
        </TabButton>
      ))}
    </section>
  );
}

export default TabSection;
