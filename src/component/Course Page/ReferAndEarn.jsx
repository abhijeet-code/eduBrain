import React from "react";
import CircleImages from "./CircleImages";
import DotPattern from "./Faq/DotPattern";

const prizes = [
  {
    src: "/mac.png",
    alt: "MacBook",
    style: "absolute left-[67%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[180px] h-[120px] z-20",
    circle: "absolute left-[67%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-white rounded-full z-10 shadow-[0_0_40px_10px_rgba(0,207,255,0.5)]",
  },
  {
    src: "/iphone.png",
    alt: "iPhone",
    style: "absolute left-[80%] top-[80%] -translate-x-1/2 -translate-y-1/2 w-[80px] h-[110px] z-20",
    circle: "absolute left-[80%] top-[80%] -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-white rounded-full z-10 shadow-[0_0_32px_8px_rgba(0,207,255,0.5)]",
  },
  {
    src: "/watch.png",
    alt: "Apple Watch",
    style: "absolute left-[90%] top-[20%] -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] z-20",
    circle: "absolute left-[90%] top-[20%] -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-white rounded-full z-10 shadow-[0_0_24px_6px_rgba(0,207,255,0.5)]",
  },
];

// 
export const ReferAndEarn = () => {
  return (
    <div className="w-full mx-auto relative">
      {/* Show referandearn3.png on md and below only */}
      <img
        src="/referandearn3.png"
        alt="Refer and Earn Mobile"
        className="block lg:hidden w-full  mx-auto mb-4 z-0 mt-2 px-6 "
      />
        {/* ...existing SVG and image code... */}
      <svg
        className="absolute w-[120px] h-[60px] xs:w-[180px] xs:h-[90px] sm:w-[220px] sm:h-[120px] md:w-[280px] md:h-[150px] lg:w-[339px] lg:h-[185px] top-4 xs:top-8 sm:top-10 md:top-16 lg:top-20 -left-4 xs:-left-8 sm:-left-12 md:-left-16 lg:-left-20 -z-1"
        width="339" height="186" viewBox="0 0 339 186" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 75.0836H56.1481L95.974 37.2153H193.907L231.121 1.30566H320.566M0 94.6707H63.9827L103.156 55.4965H211.535L236.997 30.0334H338.847M0 116.216H63.9827L99.8913 79.6539H236.997M320.566 135.151H143.635L118.825 160.614H285.311M223.939 116.216H126.007L79.6519 160.614H33.2971M33.2971 141.027H70.5115L113.602 94.6707H274.212M0 135.151H22.1981V174.325H249.402M0 149.514H10.4462V185.424H138.412" stroke="url(#paint0_linear_2039_199)" stroke-opacity="0.2"/>
        <defs>
        <linearGradient id="paint0_linear_2039_199" x1="242.672" y1="93.7776" x2="-2.03727" y2="106.449" gradientUnits="userSpaceOnUse">
        <stop stop-color="#04D5FF"/>
        <stop offset="1" stop-color="#246BFD"/>
        </linearGradient>
        </defs>
      </svg>
      <svg
        className="absolute w-[80px] h-[24px] xs:w-[120px] xs:h-[32px] sm:w-[180px] sm:h-[40px] md:w-[260px] md:h-[60px] lg:w-[339px] lg:h-[72px] top-[24px] xs:top-[40px] sm:top-[70px] md:top-[91px] right-0 -z-10"
        width="339" height="72" viewBox="0 0 339 72" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M37.2993 0.578125H208.572L239.781 13.3813H339.5M69.2702 13.3813H208.572L239.781 25.2699H339.5M0 29.3852H199.437L208.572 36.7013H339.5M339.5 48.1327H250.438L230.647 56.8205H83.7332M339.5 52.7052H270.991L250.438 60.9358M339.5 60.9358H290.021L264.14 71.4527H124.839" stroke="url(#paint0_linear_2039_200)" stroke-opacity="0.2"/>
        <defs>
        <linearGradient id="paint0_linear_2039_200" x1="96.3611" y1="36.1743" x2="337.813" y2="68.7159" gradientUnits="userSpaceOnUse">
        <stop stop-color="#04D5FF"/>
        <stop offset="1" stop-color="#246BFD"/>
        </linearGradient>
        </defs>
      </svg>
    
    
    <div className="w-full lg:flex hidden max-w-[1424px] h-[545px] mx-auto items-center justify-center relative">
      {/* ...existing SVG and image code... */}
      
      <div className="absolute left-28 -top-5 h-full flex flex-col justify-center gap-2 pl-12 z-20 max-w-[50%] ">
        <h2 className="text-5xl font-bold text-[#04D5FF] mb-6">Refer & Earn</h2>
        <p className="text-2xl text-white mb-4">
          Join our monthly referral contest at Edubraining and become a winner! Refer your friends, Win Prizes! and Elevate your learning journey with exciting rewards each month!"
        </p>
        <p className="text-2xl text-white">
          Start your referral journey—share, win, and celebrate success together!
        </p>
        {/* bg coins overlay */}
        <img src="/coins.png" className="h-16 w-16 absolute top-28 left-[340px]"></img>


      </div>
      {/* bg stick overlays:  */}
        <div className="">
          <img src="/stick1.png" className="h-8  absolute top-18 left-[25%] z-18"></img>
        <img src="/stick1.png" className="h-14  absolute top-18 left-[26%] z-18"></img>
        <img src="/stick1.png" className="h-20  absolute top-16 left-[29%] z-18"></img>
        </div>
        
      
      <img src="/referandearn2.png" className="z-10 w-11/12 mx-auto rounded-4xl"></img>
      
    </div>

    <div className="absolute top-20 z-10 right-14 lg:flex hidden">
      <CircleImages/>
    </div>
      
    <div className="absolute top-[50px] right-[20%]  h-[45px] overflow-hidden  object-contain lg:flex hidden z-10 rotate-180  ">
      <DotPattern/>
    </div>
    <div className="absolute bottom-[50px] left-[20%]  h-[45px] overflow-hidden  object-contain z-10 lg:flex hidden  ">
      <DotPattern/>
    </div>
       
    </div>
  );
};

{/* <div className="w-[1424px] h-[545px] mx-auto flex items-center justify-center relative">

        <svg
        className="absolute top-20 left-0 z-0"
        width="339"
        height="186"
        viewBox="0 0 339 186"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 75.0846H56.1481L95.974 37.2163H193.907L231.121 1.30664H320.566M0 94.6716H63.9827L103.156 55.4975H211.535L236.997 30.0343H338.847M0 116.217H63.9827L99.8913 79.6549H236.997M320.566 135.152H143.635L118.825 160.615H285.311M223.939 116.217H126.007L79.6519 160.615H33.2971M33.2971 141.028H70.5115L113.602 94.6716H274.212M0 135.152H22.1981V174.326H249.402M0 149.515H10.4462V185.425H138.412" stroke="url(#paint0_linear_2021_977)" strokeOpacity="0.2"/>
        <defs>
          <linearGradient id="paint0_linear_2021_977" x1="242.672" y1="93.7786" x2="-2.03727" y2="106.45" gradientUnits="userSpaceOnUse">
            <stop stopColor="#04D5FF"/>
            <stop offset="1" stopColor="#246BFD"/>
          </linearGradient>
        </defs>
      </svg>
      {/* Top right SVG */}
    //   <svg
    //     className="absolute right-0 top-20 z-0"
    //     width="339"
    //     height="44"
    //     viewBox="0 0 339 44"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <path d="M37.2993 1.2832H208.572L239.781 8.85123H339.5M69.2702 8.85123H208.572L239.781 15.8787H339.5M0 18.3113H199.437L208.572 22.6358H339.5M339.5 29.393H250.438L230.647 34.5284H83.7332M339.5 32.0959H270.991L250.438 36.961M339.5 36.961H290.021L264.14 43.1776H124.839" stroke="url(#paint0_linear_2021_978)" strokeOpacity="0.2"/>
    //     <defs>
    //       <linearGradient id="paint0_linear_2021_978" x1="96.3611" y1="22.3243" x2="330.05" y2="75.6064" gradientUnits="userSpaceOnUse">
    //         <stop stopColor="#04D5FF"/>
    //         <stop offset="1" stopColor="#246BFD"/>
    //       </linearGradient>
    //     </defs>
    //   </svg>
    //     <section className="relative  mx-auto rounded-[40px] overflow-hidden flex items-center justify-center">
    //   {/* Background image */}
    //   <img
    //     src="/bgcolor.png"
    //     alt="Refer & Earn Background"
    //     className="absolute inset-0 object-contain z-0"
    //     draggable={false}
    //   />

    //   {/* Top left SVG */}
      

    //   {/* Content container */}
    //   <div className="relative w-[1280px] h-[440px] flex items-center z-20">
    //     {/* Left: Text */}
    //     <div className="flex flex-col justify-center h-full w-3/5 pl-10">
    //       <div className="flex items-center gap-4 mb-4 relative">
    //         <h1 className="text-[64px] font-bold text-[#04D5FF] leading-[72px] font-sans">
    //           Refer & Earn
    //         </h1>
    //         {/* Coins SVG */}
    //         <img src="/coins.png" alt="" className="h-16 absolute -top-5 right-[300px]" />
            
    //       </div>
    //       <p className="text-white text-[32px] leading-[44px] font-medium font-sans mb-8 max-w-[900px]">
    //         Join our monthly referral contest at Edubraining and become a winner! Refer your friends, Win Prizes! and Elevate your learning journey with exciting rewards each month!
    //       </p>
    //       <p className="text-white text-[32px] leading-[44px] font-medium font-sans max-w-[900px]">
    //         Start your referral journey—share, win, and celebrate success together!
    //       </p>
    //     </div>

    //     {/* Right: Prizes and blue circle */}
    //     <div className="relative flex-1 h-full">
    //       {/* Blue circle SVG with glow */}
        
    //       <img src="/circle.png" className="h-[400px] absolute -right-20 shadow-[#00CFFF] shadow-xl rounded-full"></img>
    //       {/* Prizes */}
    //       {prizes.map((prize, idx) => (
    //         <React.Fragment key={idx}>
    //           <div className={prize.circle}></div>
    //           <img src={prize.src} alt={prize.alt} className={prize.style} draggable={false} />
    //         </React.Fragment>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    // </div> */}

export default ReferAndEarn;
