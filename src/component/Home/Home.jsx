import React from 'react'
import EdubrainingHero from '../Hero'



import WhatMakesUsDifferent from '../Welcome';

import LearningExperienceSection from "../Learning";

import EduBrainingWebsite from "../About";

import CoursesSectionHome from "./courses/CoursesSectionHome"
import ProcessSection from "./Path to Success/ProcessSection"
import CertificationSection from "./Certificates and Achievements/CertificationSection"
import SuccessStories from '../Course Page/SuccessStories';
import NextJourney from './Next Journey/NextJourney';
import FAQSection from '../Course Page/Faq/FAQSection';
import Tab from './Tab Page/Tab';
import Footer from '../Footer';


const Home = () => {
  return (
    <div className='max-w-screen overflow-hidden'>
        <EdubrainingHero />
                  <LearningExperienceSection />
                  <EduBrainingWebsite />
                  <WhatMakesUsDifferent />
                <CoursesSectionHome/>
                  <ProcessSection/>
                  <CertificationSection/>
                  <Tab/>
                  <SuccessStories subheading={"How Edubraining Boosts Your Careers"} heading={"Testimonial"} />
                  <NextJourney/>
                  <FAQSection/>
                  <Footer/>
    </div>
  )
}

export default Home
