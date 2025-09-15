import React from 'react';
import CourseDetailPage from './CourseDetails/CourseDetailPage';
import FAQSection from './Faq/FAQSection';
import CourseHero from './Course Hero/CourseHero';
import Footer from '../Footer';
import SuccessStories from './SuccessStories';
import RealProject from './RealProject';
import { ReferAndEarn } from './ReferAndEarn';
import { Certificate } from './Certificate';
import FinalAreU from './FinalAreU';

const CoursePage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0C0C0D] gap-10 overflow-x-hidden">
      <CourseHero/>
      <CourseDetailPage />
      {/* course hero sub section */}
      <Certificate/>
  <SuccessStories heading={"Real Success Stories"} subheading={"Learners Growing with Edubraining"} />
      <RealProject/>
      <ReferAndEarn/>
      <FAQSection />
       <FinalAreU/>
      <Footer/>
    </div>

  );
};

export default CoursePage;
