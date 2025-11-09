import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
const Navbar = ({onLogout, isSidebarOpen, setIsSidebarOpen}) => {
  const navLinkMap = {
    "About Us": "/#about",
    "Courses": "/#courses",
    "Process": "/#process",
    "Certification": "/#certification",
    "FAQ": "/#faq"
  };
  const navLinks = Object.keys(navLinkMap);
  const [scrollY, setScrollY] = useState(0);
  const [userName, setUserName] = useState('Guest');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
  //const navigate = useNavigate();
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
    // localStorage.removeItem('token');
    // setUserName('Guest');
    // setIsDropdownOpen(false);
    onLogout(); 
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
    <header className="flex top-0 right-0 z-30 flex-col shadow-sm bg-blend-normal w-full h-[89px] fixed">
      <nav
        className="flex z-10 flex-col items-center justify-center px-4 md:px-12 lg:px-24 py-2.5 w-full border-b border-blue-800 border-solid bg-blend-normal"
        style={{ backgroundColor: background, transition: 'background-color 0.3s ease-in-out' }}
      >
        <div className="flex justify-between items-center w-full max-w-screen-2xl">
        <div className="flex items-center gap-4">
            {/* Hamburger Menu Icon for mobile */}
            <button
              className="p-2 md:hidden text-white rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Open sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          <img
            src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/553368b5f4c2cdeed08ef104347ef0eae9e681d4?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.45] w-[104px]"
            alt="Logo"
          />
          </div>
          <ul className="hidden md:flex gap-8 items-center text-lg text-slate-50">
           {navLinks.map((linkName, index) => (
              <li key={index}>
                <Link 
                  to={navLinkMap[linkName]}className="hover:text-blue-400 transition-colors text-xl">
                  {linkName}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2.5 items-center" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex gap-2.5 items-center w-12 h-12 bg-[#246bfd]/21 rounded-full"
              aria-label="Profile menu"
              aria-expanded={isDropdownOpen}
            >
               <div className="flex justify-center items-center w-12 h-12 bg-[#246bfd]/21 rounded-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/5b4b42d7d1ca285f45eb1ea05cbf129da772d265?placeholderIfAbsent=true"
                // className="object-contain self-stretch my-auto w-7 aspect-circle"
                alt="User avatar"
              />
              </div>
            </button>
            <span className="hidden sm:block my-auto text-xl leading-none text-white">
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