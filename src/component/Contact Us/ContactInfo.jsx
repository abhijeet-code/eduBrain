
import React from 'react';
import SocialIcons from './SocialIcons';
import { Mail } from 'lucide-react';
import Footer from '../Footer';

export default function ContactInfo() {
  return (
    <section className="flex flex-col gap-4 justify-between items-start px-2 sm:px-4 md:px-6 w-full md:w-11/12 lg:w-8/12 max-md:items-center">
      <header className="flex flex-col gap-4 items-start w-full">
        <div className='w-fit'>
        <h1 className="text-[40px] font-bold leading-10 text-blue-600  max-md:text-3xl max-md:leading-8 max-sm:text-3xl max-sm:leading-7">
          Get in Touch
        </h1>
        <div className=' h-[2px]  bg-[#1545C2] '></div>
        </div>
      </header>

      <section className="flex flex-col gap-4 items-start w-full">
        <h2 className="text-3xl font-semibold text-white max-md:text-2xl max-sm:text-xl">
          How to contact us
        </h2>
        <div className="flex flex-col gap-2.5 items-start w-full text-white">
          <div className="flex flex-col   w-full ">
            {/* Phone Icon */}
            <div className='flex gap-2 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-blue-600">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
            </svg>
            <span className=" font-bold mr-2">Call us At:</span>
            </div>
            <span className="ml-8 text-base  underline underline-offset-2 decoration-[1.1px] 
            decoration-[#1545C2] max-sm:text-sm">+91 9034501137</span>
          </div>
          <div className="flex flex-col  w-full">
            {/* Email Icon */}
            <div className='flex gap-2'>
            <Mail color='#1545C2 '/>
            <span className=" font-bold mr-2">Email:</span>
            </div>
            <span className="ml-8 text-base underline underline-offset-2 decoration-[1.1px] decoration-blue-500 max-sm:text-sm">support@tutedude.com</span>
          </div>
        </div>
      </section>

      {/* We're here part below How to contact us */}
      <div className="w-full pr-0 md:pr-8 text-neutral-400 my-0 text-[13px] leading-[18px] max-sm:text-xs ">
        We're here to help you on your journey to tech excellence! Whether you have questions about our courses, need help with enrollment, want more information on mentorship or internships, or simply wish to connect with our team, we'd love to hear from you.
      </div>

      <section className="flex flex-col gap-2.5 items-start w-full">
        <h3 className="text-sm font-bold leading-4 text-white">
          Why Contact Us?
        </h3>
        <ul className="list-disc ml-2 text-sm text-gray-300 max-sm:text-xs">
          <li className="ml-5">Get details about our courses, curriculum, and pricing</li>
          <li className="ml-5">Inquire about live mentorship, certification, and internships</li>
          <li className="ml-5">Resolve issues related to payment, refunds, or access</li>
          <li className="ml-5">Request personalized learning recommendations</li>
          <li className="ml-5">Share partnership opportunities or media queries</li>
        </ul>
      </section>

      <section className="flex flex-col gap-1.5 items-start w-full">
        <h3 className="text-sm font-bold text-white max-sm:text-sm">
          Let's Connect on Social Media:
        </h3>
        <SocialIcons />
      </section>
    </section>
  );
}
