import * as React from "react";
import CourseCard from "./CourseCard";
import KeyFeatures from "./KeyFeatures";

function CourseSidebar() {
  return (
    <div
      className="w-11/12 mx-auto lg:max-w-[406px] min-w-60 flex flex-col gap-5   items-center md:items-center md:mx-auto lg:items-start lg:mx-0"
    >
      <CourseCard />
      <KeyFeatures />
    </div>
  );
}

export default CourseSidebar;
