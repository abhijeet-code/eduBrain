import React from 'react';
import NextJourneyDecorations from './NextJourneyDecorations';
import NextJourneyImage from './NextJourneyImage';
import NextJourneyContent from './NextJourneyContent';

function NextJourneySection() {
  return (
    <section className="relative shrink-0 bg-blue-300 rounded-xl w-full min-h-[380px] max-md:min-h-[400px] max-sm:min-h-[500px] flex flex-col justify-start items-center px-5 py-10 overflow-visible">
      <NextJourneyDecorations />
      <NextJourneyImage />
      <NextJourneyContent />
    </section>
  );
}

export default NextJourneySection;
