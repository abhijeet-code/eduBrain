import React from 'react';

function BenefitCard({
  icon,
  title,
  description,
  className = "",
  centerContent = false
}) {
  const baseClasses = "flex flex-col grow px-6 py-6 w-full text-base bg-gray-900 rounded-3xl border border-solid bg-blend-normal border-neutral-800 text-zinc-400 max-md:px-5 max-md:mt-8";
  const contentClasses = centerContent ? "items-center" : "";

  return (
    <article className={`${baseClasses} ${contentClasses} ${className}`}>
      <img
        src={icon}
        alt=""
        className={`object-contain w-10 bg-blend-normal aspect-square ${centerContent ? '' : 'self-center'}`}
      />
      <h3 className={`mt-6 text-2xl font-semibold leading-none text-white ${centerContent ? '' : 'self-center'}`}>
        {title}
      </h3>
      <div className="mt-3 text-zinc-400 text-center">
        {description}
      </div>
    </article>
  );
}

export default BenefitCard;
