import React from 'react'
import FAQSection from '../Course Page/Faq/FAQSection'
import Faq from './Faq'

const Certificate = () => {
  return (
    <div>
      <main className="flex w-full items-start gap-[54px] relative rounded-[5px] mt-10  bg-[#0c0c0d]">
        {/* Left Side: Certificate Info/Download */}
        <section className="flex flex-col w-5/12 min-w-[320px] min-h-[600px]  items-start gap-6 p-6 border border-[#1545c2] rounded-[5px] bg-[#101014]">
          <h1 className="text-[32px] font-semibold text-[#0356ff] mb-2">My Certificates</h1>
          <p className="text-base text-[#b9b9b9] mb-6">View and download your course completion certificates.</p>
          {[1,2].map((i) => (
            <div key={i} className="flex flex-col gap-3 p-5 border border-[#1545c2] rounded-[5px] bg-[#101014] w-full mb-4">
              <span className="text-white text-[15px]">Certificate ID: NGER-ASDFA-ASDF-34SG</span>
              <button className="px-4 py-2 bg-white text-[#0356ff] font-medium rounded hover:bg-gray-100 transition-colors w-fit">View/Download Certificate</button>
            </div>
          ))}
        </section>
        {/* Right Side: Certificate Image and FAQ */}
        <section className="flex flex-col w-7/12 px-10 items-center gap-[30px] relative flex-[0_0_auto] mr-[-20.00px]">
          <img
            className="w-full  h-auto lg:h-[398.6px] object-contain"
            alt="Certificate of completion sample"
            src={"/certificate.png"}
          />
          <Faq/>
        </section>
      </main>
    </div>
  )
}

export default Certificate
