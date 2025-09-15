import React from 'react';
import NextJourneySection from './NextJourneySection';

function NextJourney() {
  return (
    <main className="flex relative justify-center items-center px-36 pt-44 pb-40 w-full min-h-screen shadow-md bg-neutral-950 max-md:px-12 max-md:py-24 max-md:min-h-[80vh] max-sm:px-5 max-sm:py-12 max-sm:min-h-[70vh]">
      <NextJourneySection />
    </main>
  );
}

export default NextJourney;
