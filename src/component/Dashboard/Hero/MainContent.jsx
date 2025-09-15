import React, { useState, useEffect } from 'react';
import StatsCard from './StatsCard';
import CourseCard from './CourseCard';

function MainContent() {

    const [userName, setUserName] = useState(''); // State to hold the user's name
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  
    // useEffect hook to fetch user data when the component loads
    useEffect(() => {
      const fetchUserData = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          console.log("No token found, cannot fetch user name.");
          return;
        }
  
        try {
          const res = await fetch(`${BASE_URL}/api/auth/user`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
  
          if (res.ok) {
            const userData = await res.json();
            setUserName(userData.name); // Set the user's name in state
          } else {
            console.error("Failed to fetch user data");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
  
      fetchUserData();
    }, []);   

  const statsData = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/84760f8563df2663974692c6797060a23da089ab?placeholderIfAbsent=true",
      title: "Courses in progess",
      value: "2"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/3014d9d5e571837bfd55bd4a01651dc8b2fa43c1?placeholderIfAbsent=true",
      title: "Completed Courses",
      value: "5"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/7a8385022ed82c77561d82a6f68cd68e850bea45?placeholderIfAbsent=true",
      title: "Assignments Due",
      value: "3"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/dc2d685aedd3d77adafbd61205b2ea26e17dad02?placeholderIfAbsent=true",
      title: "Total Points",
      value: "1250"
    }
  ];

  const coursesData = [
    {
      title: "Powerful Data Analysis with Power BI: From Beginner to Pro",
      enrollmentDate: "27th feb 2025",
      progress: 50
    },
    {
      title: "Powerful Data Analysis with Power BI: From Beginner to Pro",
      enrollmentDate: "27th feb 2025",
      progress: 50
    }
  ];

return (
    <main className="ml-5 w-4/5 max-md:ml-0 max-md:w-full">
        <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
            <div className="w-full max-w-[1060px] max-md:max-w-full">
                <div className="w-full max-md:max-w-full">
                    <div className="w-full max-md:max-w-full">
                        <div className="flex justify-between items-center w-full text-5xl font-semibold leading-none text-blue-600 max-md:max-w-full max-md:text-4xl">
                            <h1 className="self-stretch my-auto max-md:max-w-full max-md:text-4xl">
                                Welcome back, {userName || 'there'}!
                            </h1>
                        </div>
                        <p className="mt-4 text-lg leading-none text-zinc-400 max-md:max-w-full">
                            Here's a snapshot of your learning journey.
                        </p>
                    </div>
                    <section className="flex flex-row flex-wrap justify-between items-center mt-11 max-md:mt-10 max-md:max-w-full gap-6">
                        {statsData.map((stat, index) => (
                            <StatsCard
                                key={index}
                                icon={stat.icon}
                                title={stat.title}
                                value={stat.value}
                            />
                        ))}
                    </section>
                </div>
                <section className="mt-8 max-w-full w-[714px]">
                    <h2 className="text-2xl font-medium leading-none text-white max-md:max-w-full">
                        Enrolled Courses
                    </h2>
                    <div className="flex flex-wrap gap-3.5 items-start mt-3.5 max-md:max-w-full">
                        {coursesData.map((course, index) => (
                            <CourseCard
                                key={index}
                                title={course.title}
                                enrollmentDate={course.enrollmentDate}
                                progress={course.progress}
                                className="bg-[rgba(36,107,253,0.5)]"
                            />
                        ))}
                    </div>
                </section>
            </div>
            <section className="flex flex-wrap gap-10 mt-6 w-full text-base max-md:max-w-full">
                <div className="flex flex-1 gap-8 items-center my-auto">
                    <button className="flex flex-col justify-center self-stretch px-10 py-3 my-auto text-black bg-white bg-blend-normal rounded-[37px] w-[193px] max-md:px-5">
                        <span>Explore Courses</span>
                    </button>
                    <div className="flex gap-1.5 justify-center items-center self-stretch py-3 my-auto text-white bg-blend-normal rounded-[37px]">
                        <img
                            src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/c85d554630679f3314ffec6530d6e9f357dcacd8?placeholderIfAbsent=true"
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                            alt=""
                        />
                        <span className="self-stretch my-auto">
                            100% refund offer
                        </span>
                    </div>
                </div>
                <img
                    src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/9f9b0666d37ff816cb31b863197b02b6d79d6c54?placeholderIfAbsent=true"
                    className="object-contain flex-1 w-full aspect-[1.6]"
                    alt="Dashboard illustration"
                />
            </section>
        </div>
    </main>
);
}

export default MainContent;
