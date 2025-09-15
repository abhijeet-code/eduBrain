// PaginationDots.jsx
import React from "react";

const PaginationDots = ({ totalPages, currentPage, onPageChange }) => (
  <div className="flex items-center gap-6">
    {Array.from({ length: totalPages }).map((_, idx) => (
      <button
        key={idx}
        onClick={() => onPageChange(idx)}
        className={`w-5 h-5 rounded-full transition-colors
          ${idx === currentPage
            ? "bg-[#1545C2]"
            : "bg-[#91B5FE] hover:bg-[#1545C2]/70"}
        `}
        aria-label={`Go to page ${idx + 1}`}
      />
    ))}
  </div>
);

export default PaginationDots;