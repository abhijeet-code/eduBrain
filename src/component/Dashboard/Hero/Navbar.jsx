import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({ onLogout, isSidebarOpen, setIsSidebarOpen }) => {
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
    <header className="fixed top-0 right-0 z-30 w-full h-[80px] bg-white shadow-sm border-b border-gray-100">
      <nav className="flex items-center justify-between h-full px-4 md:px-12 lg:px-24 w-full max-w-screen-2xl mx-auto">

        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-4">
          <button
            className="p-2 md:hidden text-gray-500 hover:bg-gray-100 rounded-md"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Use a colored logo if you have one, otherwise this stays as is */}
          <a href="/" className="flex-shrink-0 ml-1 sm:ml-4 md:ml-7">
          <img
            src="nav.png"
            className="h-12 sm:h-20 md:h-25 object-cover w-auto"
            alt="Logo"
          />
          </a>
        </div>

        {/* Center: Links (Desktop) */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((linkName, index) => (
            <li key={index}>
              <Link
                to={navLinkMap[linkName]}
                className="text-gray-600 hover:text-[#9411a8] font-medium transition-colors text-lg"
              >
                {linkName}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Profile Dropdown */}
        <div className="flex gap-3 items-center relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex gap-3 items-center p-1 pr-3 rounded-full hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
          >
            <div className="w-10 h-10 rounded-full bg-[#9411a8]/10 flex items-center justify-center overflow-hidden text-[#9411a8]">
              {/* Placeholder Avatar */}
              <span className="text-lg font-bold">{userName.charAt(0)}</span>
            </div>
            <span className="hidden sm:block text-base font-medium text-gray-800">
              {userName}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-lg z-50 py-1">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-gray-600 hover:bg-[#9411a8]/5 hover:text-[#9411a8] transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

