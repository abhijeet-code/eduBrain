import React from "react";

function TabButton({ title, isActive, isExpanded, onClick, children }) {
  return (
    <button
      className="relative cursor-pointer w-full max-w-2xl mx-auto"
      onClick={onClick}
    >
      <h3 className="relative w-full h-7 text-xl font-bold leading-7 text-zinc-500 text-center max-sm:mb-2 max-sm:text-lg">
        {title}
      </h3>

      {isExpanded && (
        <div className="flex relative flex-col shrink-0 items-start py-0 pr-4 pl-0 h-auto w-full max-w-2xl mx-auto max-md:p-0 max-md:w-full max-sm:px-0 max-sm:pt-4 max-sm:pb-0 max-sm:w-full">
          {children}
        </div>
      )}

      <div className={`flex relative items-center h-0.5 bg-zinc-800 w-full max-w-2xl mx-auto max-sm:mt-4`}>
        {isActive && (
          <span className="absolute left-1/2 -translate-x-1/2 -top-0.5 shrink-0 h-1 bg-blue-300 rounded-full w-[100px] max-sm:hidden" />
        )}
      </div>
    </button>
  );
}

export default TabButton;
