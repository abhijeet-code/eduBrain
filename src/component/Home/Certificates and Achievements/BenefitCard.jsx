import React from 'react';

function BenefitCard({
  icon,
  title,
  description,
  className = "",
  centerContent = false
}) {
  const baseClasses = "flex flex-col grow px-6 py-6 w-full text-base bg-white rounded-3xl border border-gray-100 text-gray-600 max-md:px-5 max-md:mt-8 hover:border-[#9411a8]/30 transition-all duration-300 hover:shadow-lg";
  const contentClasses = centerContent ? "items-center" : "";

  return (
    <article className={`${baseClasses} ${contentClasses} ${className}`}>
      <img
        src={icon}
        alt=""
        className={`object-contain w-10 aspect-square ${centerContent ? '' : 'self-center'}`}
      />
      <h3 className={`mt-6 text-2xl font-semibold leading-none text-gray-900 ${centerContent ? '' : 'self-center'}`}>
        {title}
      </h3>
      <div className="mt-3 text-gray-600 text-center">
        {description}
      </div>
    </article>
  );
}

export default BenefitCard;
