import React from 'react';

const ProcessStep = ({
  step , index
}) => {

  const {
  stepNumber,
  title,
  description,
  imageSrc,
  imageAlt = "",
  imageOpacity = 1,
  cardOpacity = 1,
  cardHeight = "auto",
  hasDecorations = false
  } = step

  // Fix reversed logic: odd index = reversed
  const isReversed = index % 2 !== 0;

  // For mobile, always stack vertically and center number
  // For desktop, alternate flex direction
  const flexDirection = isReversed ? 'md:flex-row-reverse' : 'md:flex-row';

  const stepContent = (
    <div className={`flex flex-col ${flexDirection} relative gap-5 md:gap-7 items-center w-full z-[50]`}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="shrink-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg z-[50] h-auto md:h-[329px]"
        style={{ opacity: imageOpacity }}
      />
      {/* Center line and number for mobile, position for desktop */}
      <div className="flex flex-col items-center justify-center relative">
        {/* Center line for mobile/small screens, hidden on desktop */}
        <div className="w-1 h-12 bg-gray-700 rounded-full md:hidden mb-2 " />
        <div className={` flex justify-center items-center rounded-xl h-[60px] w-[60px] md:h-[70px] 
           md:w-[70px] bg-gray-900 md:absolute ${isReversed ? 'md:left-0': 'md:right-0'} `}>
          <span className="text-xl md:text-2xl font-bold leading-8 z-[50] text-center text-white">
            {stepNumber}
          </span>
        </div>
        {/* Center line for mobile/small screens, hidden on desktop */}
       
      </div>
      <article
        className="flex relative flex-col gap-3 md:gap-4 items-start px-4 py-4 md:px-8 md:py-6 bg-gray-900 rounded-2xl md:rounded-3xl border border-solid border-neutral-800 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden"
        style={{
          opacity: cardOpacity,
          height: cardHeight !== "auto" ? cardHeight : "auto"
        }}
      >
        <h2 className="text-lg md:text-2xl font-bold leading-6 md:leading-7 text-white">
          {title}
        </h2>
        <div className="flex flex-col items-start w-full">
          {description.map((line, index) => (
            <p key={index} className="text-sm md:text-base leading-5 md:leading-6 text-zinc-400">
              {line}
            </p>
          ))}
        </div>
        {hasDecorations && (
          <>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e5cb5c7d1e2a4084693fbc5df80f84201a43508b"
              alt=""
              className="absolute -top-8 md:-top-11 h-[40px] w-[40px] md:h-[70px] md:w-[70px] right-4 md:right-[41px]"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/90869214f935c07f0e483399f402508fa8a1f8a2"
              alt=""
              className="absolute -bottom-8 md:-bottom-10 h-[40px] w-[40px] md:h-[70px] md:w-[70px] right-4 md:right-[42px]"
            />
          </>
        )}
      </article>
    </div>
  );

  // For steps 2, 4, 6 - reversed layout on desktop
  

  // Default layout for step 1
  return (
  <div className="flex relative gap-7 items-center w-full z-[2]">
      {stepContent}
    </div>
  );
};

export default ProcessStep;
