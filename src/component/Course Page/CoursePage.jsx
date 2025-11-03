import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CourseDetailPage from './CourseDetails/CourseDetailPage';
import FAQSection from './Faq/FAQSection';
// --- ADD THE IMPORT HERE ---
import { CourseHero } from './Course Hero/CourseHero';
import Footer from '../Footer';
import SuccessStories from './SuccessStories';
import RealProject from './RealProject';
import { ReferAndEarn } from './ReferAndEarn';
import { Certificate } from './Certificate';
import FinalAreU from './FinalAreU';

const CoursePage = () => {
  const [course, setCourse] = useState(null);
  const { courseId } = useParams();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      setCourse(null);
      setIsEnrolled(false);
      const token = localStorage.getItem('token');
      try {
        const res = await fetch(`${BASE_URL}/api/courses/${courseId}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setCourse(data);
          if (data.curriculum?.[0]?.lectures?.[0]?.s3VideoKey) {
            setIsEnrolled(true);
          }
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
    return <div className="text-white text-center py-40">Loading Course...</div>;
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0C0C0D] gap-10 overflow-x-hidden">
      {!isEnrolled && <CourseHero course={course} />}
      <CourseDetailPage course={course} isEnrolled={isEnrolled} />
      {!isEnrolled && <Certificate />}
      <SuccessStories heading={"Real Success Stories"} subheading={"Learners Growing with Edubraining"} />
      <RealProject />
      <ReferAndEarn />
      <FAQSection />
      {!isEnrolled && <FinalAreU course={course} />}
      
      <Footer />
    </div>
  );
};

export default CoursePage;