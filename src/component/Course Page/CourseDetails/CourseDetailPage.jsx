"use client";
import * as React from "react";
// import CourseOverview from "./CourseOverview";
import CourseOverview from "./CourseOverview";

// import LearningObjectives from "./LearningObjectives";
import LearningObjectives from "./LearningObjective";

import CourseContent from "./CourseContent";
import CourseRequirements from "./CourseRequirements";
import CourseDescription from "./CourseDescription";
import CourseSidebar from "./CourseSidebar";

function CourseDetailPage() {
  return (
    <div className="min-h-screen bg-transparent text-white relative overflow-hidden mx-auto py-10 md:py-20 px-2 md:px-0">
      <div className="flex flex-col-reverse md:flex-row md:flex-wrap gap-10 items-start w-full max-w-[1424px] mx-auto">
        <main className="w-full md:w-[797px] mx-auto max-md:max-w-full">
          <div className="px-2 md:px-4">
            <CourseOverview />
          </div>
          <div className="px-2 md:px-4 mt-6">
            <CourseContent />
          </div>
          <div className="px-2 md:px-4 mt-6">
            <CourseRequirements />
          </div>
          <div className="px-2 md:px-4 mt-6">
            <CourseDescription />
          </div>
        </main>
        <aside className="w-full md:w-[406px] mx-auto mt-8 md:mt-0">
          <CourseSidebar />
        </aside>
      </div>
    </div>
    
  );
}

export default CourseDetailPage;
