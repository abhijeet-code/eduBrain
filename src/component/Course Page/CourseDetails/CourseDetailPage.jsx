"use client";
import React, { useState, useEffect } from "react";
import CourseOverview from "./CourseOverview";
import { useParams } from "react-router-dom";
import { CourseHero } from "../Course Hero/CourseHero"; // Ensure named import if needed
import CourseContent from "./CourseContent";
import CourseRequirements from "./CourseRequirements";
import CourseDescription from "./CourseDescription";
import CourseSidebar from "./CourseSidebar";

// This is the TOP-LEVEL component exported, but it delegates rendering
function CourseDetailPageWrapper() {
  const [course, setCourse] = useState(null);
  const { courseId } = useParams();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCourse = async () => {
      setCourse(null); // Reset on ID change
      const token = localStorage.getItem('token');
      try {
        const res = await fetch(`${BASE_URL}/api/courses/${courseId}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setCourse(data);
        } else {
          console.error(`Failed to fetch course details for ID: ${courseId}`);
          setCourse(null);
        }
      } catch (error) {
        console.error("Error fetching course:", error);
        setCourse(null);
      }
    };
    if (courseId) {
      fetchCourse();
    } else {
      setCourse(null);
    }
  }, [courseId, BASE_URL]);

  if (!course) {
    return <div className="text-white text-center py-40">Loading course details...</div>;
  }

  // Pass the fetched course data to the actual page layout component
  return <CoursePageLayout course={course} />;
}


// --- THIS COMPONENT NOW HANDLES THE ACTUAL PAGE LAYOUT ---z
// It receives the fetched `course` data as a prop
const CoursePageLayout = ({ course, isEnrolled }) => {
  if (!course) return null;
  return (
    // Reverted container styling to match original structure
    <div className="min-h-screen bg-transparent text-white relative overflow-hidden mx-auto py-10 md:py-20 px-2 md:px-0">
      {/* Reverted layout flexbox and max-width to match original */}
      <div className="flex flex-col-reverse md:flex-row md:flex-wrap gap-10 items-start w-full max-w-[1424px] mx-auto">
        {/* Reverted main content width */}
        <main className="w-full md:w-[797px] mx-auto max-md:max-w-full">
          <div className="px-2 md:px-4">
            <CourseOverview course={course} />
          </div>
          {/* Learning Objectives might need to be added here if it was present */}
          {/* <div className="px-2 md:px-4 mt-6">
            <LearningObjectives course={course} />
          </div> */}
          <div id="curriculum" className="px-2 md:px-4 mt-6">
            <CourseContent curriculum={course.curriculum} courseId={course._id} />
          </div>
          <div className="px-2 md:px-4 mt-6">
            <CourseRequirements course={course} />
          </div>
          <div className="px-2 md:px-4 mt-6">
            <CourseDescription course={course} />
          </div>
        </main>
        {/* Reverted aside width */}
        <aside className="w-full md:w-[406px] mx-auto mt-8 md:mt-0">
          <CourseSidebar course={course} isEnrolled= {isEnrolled} />
        </aside>
      </div>
    </div>
  );
}

// Export the top-level wrapper component
export default CourseDetailPageWrapper;