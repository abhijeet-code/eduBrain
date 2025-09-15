import React from 'react'

const PolicyLinks = () => {
 return (
    <footer className="flex flex-col sm:flex-row justify-between items-center w-full max-w-[527px] gap-4 sm:gap-0 px-2">
      <a
        href="#"
        className="text-lg sm:text-2xl text-neutral-500 hover:text-neutral-400 transition-colors"
      >
        Refund policy
      </a>
      <a
        href="#"
        className="text-lg sm:text-2xl text-neutral-500 hover:text-neutral-400 transition-colors"
      >
        Privacy policy
      </a>
      <a
        href="#"
        className="text-lg sm:text-2xl text-neutral-500 hover:text-neutral-400 transition-colors"
      >
        Terms of use
      </a>
    </footer>
  );
}

export default PolicyLinks