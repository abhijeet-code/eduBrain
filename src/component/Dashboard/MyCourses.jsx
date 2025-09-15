import React from "react";

const coursesData = [
  {
    id: 1,
    title: "Powerful Data Analysis with Power BI: From Beginner to Pro",
    image: "/powerbi.png",
    progress: 50,
    progressWidth: "165px",
  },
  {
    id: 2,
    title: "Powerful Data Analysis with Power BI: From Beginner to Pro",
    image: "/powerbi.png",
    progress: 30,
    progressWidth: "79px",
  },
  {
    id: 3,
    title: "Powerful Data Analysis with Power BI: From Beginner to Pro",
    image: "/powerbi.png",
    progress: 30,
    progressWidth: "79px",
  },
];

const CourseCard = ({ course  , p}) => {
    return (
        <article className="flex flex-col w-[300px] items-center relative bg-[#0c0c0d] rounded-[6.93px] border-[0.87px] border-solid border-[#2d2d2d] shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_8.66px_12.99px_-2.6px_#0000001a,0px_3.46px_5.19px_-3.46px_#0000001a]">
            <div
                className="relative self-stretch w-full h-[183.55px] rounded-[6.93px_6.93px_0px_0px] bg-cover bg-[50%_50%]"
                style={{ backgroundImage: `url(${course.image})` }}
                role="img"
                aria-label={`Course thumbnail for ${course.title}`}
            />

            <div className="flex flex-col items-start gap-[12.12px] px-[14.72px] py-[17.32px] relative self-stretch w-full flex-[0_0_auto]">
                <h3 className="relative w-[271.87px] mt-[-0.87px] mr-[-3.04px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[17.3px] tracking-[0] leading-[20.6px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    {course.title}
                </h3>
                
                <div className="flex text-gray-400 flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                    
                    <div
                        className="relative self-stretch w-full h-1.5 bg-[#f1f2f5] rounded-[5px] overflow-hidden"
                        role="progressbar"
                        aria-valuenow={course.progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label={`Course progress: ${course.progress}% completed`}
                    >
                        <div
                            className="h-1.5 bg-emerald-500 rounded-[5px]"
                            style={{ width: course.progressWidth }}
                        />
                        {course.progress}
                    </div>
            <div className="w-full flex justify-end mt-1">
              <span className="[font-family:'Roboto-Regular',Helvetica] font-normal text-variable-collection-color-dull-duplicate text-[10px] text-right tracking-[0] leading-[10px] ">
                {course.progress}% completed
              </span>
            </div>
                </div>

                <button className="flex items-center justify-center gap-[8.66px] px-[79.66px] py-[6.93px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[6.93px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                    <span className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-[#000000] text-[13.9px] tracking-[0] leading-[20.8px] whitespace-nowrap">
                        Resume Learning
                    </span>
                </button>
            </div>
        </article>
    );
};

export const MyCourses = () => {
  return (
    <main className="flex flex-col w-[1220px] items-start gap-[54px] p-10 relative rounded-[5px] mt-10 border border-solid border-[#1545c2]">
      <header className="inline-flex items-center justify-center gap-[19.51px] px-0 py-[19.51px] relative flex-[0_0_auto]">
        <h1 className="relative w-fit mt-[-3.90px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0356ff] text-[41.9px] tracking-[0] leading-[39.1px] whitespace-nowrap">
          My Courses
        </h1>
      </header>

      <section
        className="inline-flex items-center gap-[30px] relative flex-[0_0_auto] mr-[-20.00px]"
        aria-label="Course list"
      >
        {coursesData.map((course) => (
          <CourseCard key={course.id} course={course} p={course.progress} />
        ))}
      </section>
    </main>
  );
};
