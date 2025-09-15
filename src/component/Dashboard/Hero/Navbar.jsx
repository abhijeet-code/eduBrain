// import React, { useEffect, useState } from 'react';

// const Navbar = () => {
//   const navLinks = ["About Us", "Courses", "Process", "Certification", "FAQ"];
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Transition from blue to dark as you scroll (0-200px)
//   const background = scrollY < 200
//     ? `rgba(36, 107, 253, ${0.11 * (1 - scrollY / 200)})`
//     : `#0c0c0d`;

//   return (
//     <header className="flex top-0 right-0 z-0 flex-col shadow-sm bg-blend-normal w-full h-[89px] max-md:max-w-full fixed">
//       <nav
//         className="flex z-10 flex-col items-center justify-center px-24 py-2.5 w-full border border-blue-800 border-solid bg-blend-normal max-md:px-5 max-md:max-w-full"
//         style={{ backgroundColor: background, transition: 'background-color 0.3s' }}
//       >
//         <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1453px] max-md:max-w-full">
//           <img
//             src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/553368b5f4c2cdeed08ef104347ef0eae9e681d4?placeholderIfAbsent=true"
//             className="object-contain shrink-0 self-stretch my-auto aspect-[1.45] w-[104px]"
//             alt="Logo"
//           />
//           <ul className="flex gap-8 items-start self-stretch my-auto text-lg bg-blend-normal min-h-[27px] min-w-60 text-slate-50 max-md:max-w-full">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <a href="#" className="hover:text-blue-400 transition-colors text-xl">
//                   {link}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <div className="flex gap-2.5 items-center self-stretch my-auto">
//             <div className="flex overflow-hidden gap-3.5 justify-center items-center self-stretch px-2 my-auto w-12 h-12 bg-[#246bfd]/21 bg-opacity-20 min-h-12 rounded-[30px]">
//               <img
//                 src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/5b4b42d7d1ca285f45eb1ea05cbf129da772d265?placeholderIfAbsent=true"
//                 className="object-contain self-stretch my-auto w-7 aspect-square"
//                 alt="User avatar"
//               />
//             </div>
//             <span className="self-stretch my-auto text-2xl leading-none text-white">
//               Aman Singh
//             </span>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navLinks = ["About Us", "Courses", "Process", "Certification", "FAQ"];
//   const [scrollY, setScrollY] = useState(0);
//   const [userName, setUserName] = useState('Guest');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const BASE_URL = "http://localhost:5000";
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     // Handle scroll for background transition
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener('scroll', handleScroll);

//     // Fetch user profile or user data
//     const fetchUserData = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setUserName('Guest');
//         return;
//       }

//       try {
//         const profileRes = await fetch(`${BASE_URL}/api/profile/me`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (profileRes.ok) {
//           const profileData = await profileRes.json();
//           if (profileData.fullName) {
//             setUserName(profileData.fullName);
//             return;
//           }
//         }

//         const userRes = await fetch(`${BASE_URL}/api/auth/me`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (userRes.ok) {
//           const userData = await userRes.json();
//           setUserName(userData.name || 'Guest');
//         } else {
//           setUserName('Guest');
//         }
//       } catch (error) {
//         console.error("Failed to fetch user data:", error);
//         setUserName('Guest');
//       }
//     };

//     fetchUserData();

//     // Handle click outside to close dropdown
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setUserName('Guest');
//     setIsDropdownOpen(false);
//     navigate('/');
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   // Transition from blue to dark as you scroll (0-200px)
//   const background = scrollY < 200
//     ? `rgba(36, 107, 253, ${0.11 * (1 - scrollY / 200)})`
//     : `#0c0c0d`;

//   return (
//     <header className="flex top-0 right-0 z-0 flex-col shadow-sm bg-blend-normal w-full h-[89px] max-md:max-w-full fixed">
//       <nav
//         className="flex z-10 flex-col items-center justify-center px-24 py-2.5 w-full border border-blue-800 border-solid bg-blend-normal max-md:px-5 max-md:max-w-full"
//         style={{ backgroundColor: background, transition: 'background-color 0.3s' }}
//       >
//         <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1453px] max-md:max-w-full">
//           <img
//             src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/553368b5f4c2cdeed08ef104347ef0eae9e681d4?placeholderIfAbsent=true"
//             className="object-contain shrink-0 self-stretch my-auto aspect-[1.45] w-[104px]"
//             alt="Logo"
//           />
//           <ul className="flex gap-8 items-start self-stretch my-auto text-lg bg-blend-normal min-h-[27px] min-w-60 text-slate-50 max-md:max-w-full">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <a href="#" className="hover:text-blue-400 transition-colors text-xl">
//                   {link}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <div className="flex gap-2.5 items-center self-stretch my-auto relative" ref={dropdownRef}>
//             <button
//               onClick={toggleDropdown}
//               className="flex overflow-hidden gap-3.5 justify-center items-center self-stretch px-2 my-auto w-12 h-12 bg-[#246bfd]/21 bg-opacity-20 min-h-12 rounded-[30px]"
//               aria-label="Profile menu"
//               aria-expanded={isDropdownOpen}
//             >
//               <img
//                 src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/5b4b42d7d1ca285f45eb1ea05cbf129da772d265?placeholderIfAbsent=true"
//                 className="object-contain self-stretch my-auto w-7 aspect-square"
//                 alt="User avatar"
//               />
//             </button>
//             <span className="self-stretch my-auto text-2xl leading-none text-white max-w-[200px] truncate">
//               {userName}
//             </span>
//             {isDropdownOpen && (
//               <div className="absolute top-full right-0 mt-2 w-40 bg-[#246bfd]/21 border border-blue-800 rounded-lg shadow-lg z-20">
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 text-white text-base font-medium hover:bg-[#246bfd]/30 transition-colors"
//                   aria-label="Log out"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navLinks = ["About Us", "Courses", "Process", "Certification", "FAQ"];
  const [scrollY, setScrollY] = useState(0);
  const [userName, setUserName] = useState('Guest');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const BASE_URL = "http://localhost:5000";
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Handle scroll for background transition
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    // Fetch user profile or user data
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setUserName('Guest');
        return;
      }

      try {
        const profileRes = await fetch(`${BASE_URL}/api/profile/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (profileRes.ok) {
          const profileData = await profileRes.json();
          if (profileData.fullName) {
            setUserName(profileData.fullName);
            return;
          }
        }

        const userRes = await fetch(`${BASE_URL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (userRes.ok) {
          const userData = await userRes.json();
          setUserName(userData.name || 'Guest');
        } else {
          setUserName('Guest');
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setUserName('Guest');
      }
    };

    fetchUserData();

    // Handle click outside to close dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserName('Guest');
    setIsDropdownOpen(false);
    navigate('/', { replace: true }); // Use replace to avoid history issues
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Transition from blue to dark as you scroll (0-200px)
  const background = scrollY < 200
    ? `rgba(36, 107, 253, ${0.11 * (1 - scrollY / 200)})`
    : `#0c0c0d`;

  return (
    <header className="flex top-0 right-0 z-0 flex-col shadow-sm bg-blend-normal w-full h-[89px] max-md:max-w-full fixed">
      <nav
        className="flex z-10 flex-col items-center justify-center px-24 py-2.5 w-full border border-blue-800 border-solid bg-blend-normal max-md:px-5 max-md:max-w-full"
        style={{ backgroundColor: background, transition: 'background-color 0.3s' }}
      >
        <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1453px] max-md:max-w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/553368b5f4c2cdeed08ef104347ef0eae9e681d4?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.45] w-[104px]"
            alt="Logo"
          />
          <ul className="flex gap-8 items-start self-stretch my-auto text-lg bg-blend-normal min-h-[27px] min-w-60 text-slate-50 max-md:max-w-full">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-400 transition-colors text-xl">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2.5 items-center self-stretch my-auto relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex overflow-hidden gap-3.5 justify-center items-center self-stretch px-2 my-auto w-12 h-12 bg-[#246bfd]/21 bg-opacity-20 min-h-12 rounded-[30px]"
              aria-label="Profile menu"
              aria-expanded={isDropdownOpen}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/5b4b42d7d1ca285f45eb1ea05cbf129da772d265?placeholderIfAbsent=true"
                className="object-contain self-stretch my-auto w-7 aspect-square"
                alt="User avatar"
              />
            </button>
            <span className="self-stretch my-auto text-2xl leading-none text-white max-w-[200px] truncate">
              {userName}
            </span>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-[#246bfd]/21 border border-blue-800 rounded-lg shadow-lg z-20">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-white text-base font-medium hover:bg-[#246bfd]/30 transition-colors"
                  aria-label="Log out"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;