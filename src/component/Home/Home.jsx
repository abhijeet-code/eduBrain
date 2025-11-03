import React,  { useEffect }  from 'react'
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the '#'
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [location]);
  return (
    <div className='max-w-screen overflow-hidden'>
        <EdubrainingHero />
                  <LearningExperienceSection />
                  {/* <EduBrainingWebsite /> */}
                  <section id="about">
        <EduBrainingWebsite /> {/* About */}
      </section>
                  <WhatMakesUsDifferent />
                  {/* <CoursesSectionHome/> */}
                  <section id="courses">
        <CoursesSectionHome />
      </section>
                  {/* <ProcessSection/> */}
                  <section id="process">
        <ProcessSection /> {/* Process */}
      </section>
                  {/* <CertificationSection/> */}
                  <section id="certification">
        <CertificationSection /> {/* certification */}
      </section>
                  <Tab/>
                  <SuccessStories subheading={"How Edubraining Boosts Your Careers"} heading={"Testimonial"} />
                  <NextJourney/>
                  {/* <FAQSection/> */}
                  <section id="faq">
        <FAQSection /> {/* Faqs */}
      </section>
                  <Footer/>
    </div>
  )
}

export default Home
