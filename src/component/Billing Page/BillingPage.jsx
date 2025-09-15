import React from "react";
import { PurchaseSummarySection } from "./PurchaseSummary";
import { CourseDetailsSection } from "./CourseDetailsSecion";
// If the correct file is CourseDetailsSecion.jsx, this is fine. If not, rename the file and update import.
import BackgroundSVG from "../Course Page/Faq/BackgroundSVG";
import BackgroundSvg from "../Contact Us/BackgroundSvg";



export const BillingPage = () => {
  return (
  <main className="bg-[#0c0c0d] min-h-screen w-full relative flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 lg:px-12 py-4">
      {/* Responsive SVG backgrounds */}
      <BackgroundSVG position={"left"} />
      <BackgroundSVG position={"right"} />
      <div className="w-full max-w-[1424px] min-h-[700px] flex flex-col items-center justify-center relative">
        <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center gap-8 md:gap-12 lg:gap-[120px] pt-8 md:pt-16 lg:pt-[104px] px-0 md:px-4">
          <div className="w-full max-w-md lg:max-w-[398px] flex-shrink-0 mb-8 lg:mb-0">
            <CourseDetailsSection />
          </div>
          <div className="w-full max-w-lg lg:max-w-[502.4px] flex-shrink-0">
            <PurchaseSummarySection />
          </div>
        </div>
      </div>
    </main>
  );
};
