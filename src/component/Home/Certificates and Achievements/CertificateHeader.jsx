import React from 'react';

function CertificateHeader() {
  return (
    <header className="flex flex-col items-center self-center max-w-full bg-blend-normal w-[745px]">
      <p className="text-2xl leading-none text-blue-300">
        Certification and Achievement
      </p>
      <h1 className="mt-6 text-5xl font-semibold leading-none text-center text-slate-50 max-md:max-w-full max-md:text-4xl">
        How It Helps you?
      </h1>
      <p className="self-stretch mt-6 text-base leading-6 text-center text-zinc-500 max-md:max-w-full">
        Boost your career with Edubraining certifications. Validate your
        skills, stand out in the tech industry, and unlock new opportunities.
      </p>
    </header>
  );
}

export default CertificateHeader;
