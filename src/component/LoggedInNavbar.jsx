import React, { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react"; // Import the User icon
import { Link, useNavigate } from "react-router-dom";

const LoggedInNavbar = ({ onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoutClick = () => {
    onLogout();
    setIsDropdownOpen(false);
    navigate('/'); // Navigate to home page after logout
  };

  const navItems = [
    { name: "About Us", to: "/#about" },
    { name: "Courses", to: "/courses" },
    { name: "Process", to: "/#process" },
    { name: "Certification", to: "/#certification" },
    { name: "FAQ", to: "/#faq" },
    { name: "Contact Us", to: "/contact" },
  ];

  return (
    <div className={`sticky top-0 z-50 bg-white ${scrolled ? "shadow-md" : ""} transition-all duration-300 w-full`}>
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-12">
        <div className="rounded-xl shadow-sm border border-gray-200 px-2 sm:px-4 md:px-6 lg:px-10 bg-white mt-4 w-full max-w-full ">
          <div className="flex flex-wrap items-center w-full min-w-0">
            {/* Left: Logo */}
            <a href="/" className="flex-shrink-0 ml-1 sm:ml-4 md:ml-7">
              <img src="/nav.png" alt="Logo" className="h-12 sm:h-14 md:h-16 object-cover w-auto" />
            </a>

            {/* Center: Navigation */}
            <div className="hidden md:flex flex-1 justify-center flex-wrap gap-x-4 gap-y-2 xl:gap-x-6">
              {navItems.map((item) => (
                <Link key={item.name} to={item.to} className="text-gray-700 hover:text-[#9411a8] text-base md:text-lg tracking-wide transition whitespace-nowrap px-1 font-medium">
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right: User Profile Icon & Dropdown */}
            <div className="hidden md:flex justify-end flex-shrink-0 mr-2 sm:mr-4 md:mr-7 relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#9411a8] to-[#1545C2] rounded-full text-white focus:outline-none hover:shadow-lg transition-shadow"
              >
                <User size={24} />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 top-12 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 border border-gray-100">
                  <Link to="/profile-dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#9411a8]" onClick={() => setIsDropdownOpen(false)}>
                    Dashboard
                  </Link>
                  <button onClick={handleLogoutClick} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#9411a8]">
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden ml-auto mr-1 sm:mr-2">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-3">
              <div className="bg-white rounded-lg px-2 sm:px-4 py-3 space-y-2 shadow-md border border-gray-100">
                {navItems.map((item) => (
                  <Link key={item.name} to={item.to} className="block text-gray-700 hover:text-[#9411a8] text-base font-medium transition px-1" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <Link to="/profile-dashboard" className="block text-gray-700 hover:text-[#9411a8] text-base font-medium transition px-1" onClick={() => setIsMenuOpen(false)}>
                    Dashboard
                  </Link>
                  <button onClick={handleLogoutClick} className="block w-full text-left text-gray-700 hover:text-[#9411a8] text-base font-medium transition px-1 mt-2">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoggedInNavbar;