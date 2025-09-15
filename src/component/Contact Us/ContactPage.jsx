import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import PolicyLinks from './PolicyLinks';
import BackgroundSvg from './BackgroundSvg';



const ContactPage = () =>  {
  return (
    <div className="overflow-hidden relative w-full bg-neutral-950 min-h-[880px] py-5">
      <BackgroundSvg />

      <div className="flex flex-col relative gap-24 justify-center items-center px-4 sm:px-6 md:px-11 py-4 mx-auto my-0 w-full max-w-[1200px] min-h-[739px] z-[2] md:gap-16 sm:gap-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-10 justify-center items-center md:items-start w-full max-w-[1100px] py-10 mx-auto">
          <div className="w-full md:w-[56%] lg:w-[60%] flex justify-center md:justify-center mb-8 md:mb-0">
            <ContactInfo />
          </div>
          <div className="w-full md:w-[44%] lg:w-[40%] flex justify-center md:justify-center">
            <ContactForm />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <PolicyLinks />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
