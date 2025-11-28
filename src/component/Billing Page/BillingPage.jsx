import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PurchaseSummarySection } from "./PurchaseSummary";
import { CourseDetailsSection } from "./CourseDetailsSecion";

import BackgroundSVG from "../Course Page/Faq/BackgroundSVG";
import BackgroundSvg from "../Contact Us/BackgroundSvg";



export const BillingPage = () => {
  const [searchParams] = useSearchParams();
  const [course, setCourse] = useState(null);
  const [userData, setuserData] = useState(null);
  const courseId = searchParams.get('course');
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchCourseDetails = async () => {
      if (!courseId) {
        console.error("No course ID in URL");
        return;
      }
      try {
        // Fetch the public version of the course details
        const res = await fetch(`${BASE_URL}/api/courses/${courseId}`);
        if (res.ok) {
          const data = await res.json();
          setCourse(data);
        } else {
          console.error("Failed to fetch course");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchUserData = async () => {
      if (!token) return;
      try {
        const res = await fetch(`${BASE_URL}/api/auth/user`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setuserData(data);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
    fetchCourseDetails();
  }, [courseId, BASE_URL]);

  if (!course) {
    return <div className="text-white text-center py-40">Loading course details...</div>;
  }
  return (
    <main className="bg-gray-50 min-h-screen w-full relative flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 lg:px-12 py-4">
      {/* Responsive SVG backgrounds */}
      <BackgroundSVG position={"left"} />
      <BackgroundSVG position={"right"} />
      <div className="w-full max-w-[1424px] min-h-[700px] flex flex-col items-center justify-center relative">
        <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center gap-8 md:gap-12 lg:gap-[120px] pt-8 md:pt-16 lg:pt-[104px] px-0 md:px-4">
          <div className="w-full max-w-md lg:max-w-[398px] flex-shrink-0 mb-8 lg:mb-0">
            <CourseDetailsSection course={course} />
          </div>
          <div className="w-full max-w-lg lg:max-w-[502.4px] flex-shrink-0">
            <PurchaseSummarySection course={course} userData={userData} />
          </div>
        </div>
      </div>
    </main>
  );
};
