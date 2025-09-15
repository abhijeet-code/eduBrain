import React from "react";

export default function DotPattern() {
  const rows = 8; // number of rows
  const cols = 10; // number of columns

  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {Array.from({ length: cols }).map((_, colIndex) => (
            <div
              key={colIndex}
              className="w-2 h-2 rounded-full bg-gray-400"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
