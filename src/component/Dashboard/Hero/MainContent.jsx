import React, { useState, useEffect } from 'react';
import StatsCard from './StatsCard';
import CourseCard from './CourseCard';
import {Link} from 'react-router-dom';

function MainContent() {

    const [userName, setUserName] = useState(''); // State to hold the user's name
    const [enrolledCourses, setEnrolledCourses] = useState([]); // State for courses
    const [loadingCourses, setLoadingCourses] = useState(true);
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
 
  
    // useEffect hook to fetch user data when the component loads
    const [stats, setStats] = useState({
      inProgress: 0,
      completed: 0,
      assignmentsDue: 0,
      });

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        setUserName('Guest');
        setLoadingCourses(false);
        return;
      }
    
      const fetchUserData = async () => {
        try {
      // Attempt 1: Fetch the name from the user's profile first.
      const profileRes = await fetch(`${BASE_URL}/api/profile/me`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (profileRes.ok) {
        const profileData = await profileRes.json();
        // If a profile exists and has a fullName, use it and stop here.
        if (profileData && profileData.fullName) {
          setUserName(profileData.fullName);
          return; // Success! Exit the function.
        }
      }

      // Attempt 2: If the profile fetch failed
      // fall back to the original user model name.
      const userRes = await fetch(`${BASE_URL}/api/auth/user`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (userRes.ok) {
        const userData = await userRes.json();
        setUserName(userData.name); // Set the name from the user model as a fallback
      } else {
        console.error("Failed to fetch any user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchCourseAndAssignmentStats = async () => {
    setLoadingCourses(true);
    try {
      // Fetch both sets of data in parallel
      const [courseRes, assignmentRes] = await Promise.all([
        fetch(`${BASE_URL}/api/courses/enrollments`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${BASE_URL}/api/assignments/my-assignments`, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ]);

      // --- Process Course Data ---
      if (courseRes.ok) {
        const courseData = await courseRes.json();
        setEnrolledCourses(courseData); // Still need this for the "Enrolled Courses" section

        const inProgress = courseData.filter(c => c.progress < 100).length;
        const completed = courseData.filter(c => c.progress === 100).length;
        
        setStats(prevStats => ({
          ...prevStats,
          inProgress: inProgress,
          completed: completed
        }));
      } else {
        console.error("Failed to fetch enrolled courses");
      }

      // --- Process Assignment Data ---
      if (assignmentRes.ok) {
        const assignmentData = await assignmentRes.json();
        let dueCount = 0;
        for (const courseGroup of assignmentData) {
          for (const assignment of courseGroup.assignments) {
            if (assignment.submissionStatus === 'Not Submitted') {
              dueCount++;
            }
          }
        }
        setStats(prevStats => ({
          ...prevStats,
          assignmentsDue: dueCount
        }));
      } else {
         console.error("Failed to fetch assignment stats");
      }

    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    } finally {
      setLoadingCourses(false);
    }
  };

  const fetchEnrolledCourses = async () => {
    try {
        const res = await fetch(`${BASE_URL}/api/courses/enrollments`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
            const data = await res.json();
            setEnrolledCourses(data);
        }
    } catch (error) {
        console.error("Failed to fetch enrolled courses:", error);
    } finally {
        setLoadingCourses(false);
    }
};

  fetchUserData();
  fetchCourseAndAssignmentStats();
  fetchEnrolledCourses();
}, [BASE_URL]); 

  const dynamicStatsData = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/84760f8563df2663974692c6797060a23da089ab?placeholderIfAbsent=true",
      title: "Courses in progess",
      value: stats.inProgress.toString()
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/3014d9d5e571837bfd55bd4a01651dc8b2fa43c1?placeholderIfAbsent=true",
      title: "Completed Courses",
      value: stats.completed.toString()
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/7a8385022ed82c77561d82a6f68cd68e850bea45?placeholderIfAbsent=true",
      title: "Assignments Due",
      value: stats.assignmentsDue.toString()
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
                        {dynamicStatsData.map((stat, index) => (
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
                    {loadingCourses ? (
                    <p className="text-zinc-400">Loading courses...</p>
                ) : enrolledCourses.length > 0 ? (
                    enrolledCourses.map((course) => (
                            <CourseCard
                                key={course.id}
                                courseId ={course.id}
                                title={course.title}
                                enrollmentDate={course.enrollmentDate}
                                progress={course.progress}
                                // className="bg-[rgba(36,107,253,0.5)]"
                            />
                        ))
                      ) : (<p className="text-zinc-400">No courses enrolled yet.</p>)}
                    </div>
                </section>
            </div>
            <section className="flex flex-wrap gap-10 mt-6 w-full text-base max-md:max-w-full">
                <div className="flex flex-1 gap-8 items-center my-auto">
                    {/* <button  */}
                    <Link
                     to={`/courses`}
                     className="flex flex-col justify-center self-stretch px-10 py-3 my-auto text-black bg-white bg-blend-normal rounded-[37px] w-[193px] max-md:px-5" >
                        <span>Explore Courses</span>
                    </Link>
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
