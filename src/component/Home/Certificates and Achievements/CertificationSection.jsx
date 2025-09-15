"use client";
import React from 'react';
import CertificateHeader from './CertificateHeader';
import BenefitGrid from './BenefitGrid';
import DecorativeVectors from '../../Courses/DecorativeVectors';

function CertificationSection() {
  return (
    <section className="flex overflow-hidden items-center flex-col pt-28 pb-16 pl-20 shadow-sm bg-blend-normal bg-[#0C0C0D] max-xl:pt-20 max-xl:pl-10 max-lg:pt-16 max-lg:pl-6 max-md:pt-12 max-md:pl-4 max-sm:pt-8  max-sm:px-5  max-sm:pb-8 w-full">
      <CertificateHeader />
      <BenefitGrid />
    </section>
  );
}

export default CertificationSection;
