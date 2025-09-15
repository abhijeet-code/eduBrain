import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About Us", to: "/#about" },
    { name: "Courses", to: "/courses" },
    { name: "Process", to: "/#process" },
    { name: "Certification", to: "/#certification" },
    { name: "FAQ", to: "/#faq" },
    { name: "Contact Us", to: "/contact" },
  ];

  return (
    <div className={`sticky top-0 z-50 bg-[#0C0C0D] ${scrolled ? "opacity-95" : "opacity-100"} transition-opacity duration-300 w-full`}>
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-12">
        <div className="rounded-xl shadow-md border border-[#1545C2] px-2 sm:px-4 md:px-6 lg:px-10 bg-[#1545C21A] mt-4 w-full max-w-full overflow-x-auto">
          <div className="flex flex-wrap items-center w-full min-w-0">
            {/* Left: Logo */}
            <a href="/" className="flex-shrink-0 ml-1 sm:ml-4 md:ml-7">
              <img src="/nav.png" alt="Logo" className="h-12 sm:h-14 md:h-16 object-cover w-auto" />
            </a>

            {/* Center: Navigation */}
            <div className="hidden md:flex flex-1 justify-center flex-wrap gap-x-4 gap-y-2 xl:gap-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-white text-base md:text-lg tracking-wide transition whitespace-nowrap px-1"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right: Login Button */}
            <div className="hidden md:flex justify-end flex-shrink-0 mr-2 sm:mr-4 md:mr-7">
              <button
                onClick={onLoginClick}
                className="bg-gradient-to-r from-[#72A0FF] via-[#246CFF] to-[#0054FF] text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full text-xs sm:text-sm transition"
              >
                Login / Sign Up
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden ml-auto mr-1 sm:mr-2">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-3">
              <div className="bg-[#0C0C0D] rounded-lg px-2 sm:px-4 py-3 space-y-2 shadow-md">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="block text-gray-300 hover:text-white text-base font-medium transition px-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    onLoginClick();
                    setIsMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-[#72A0FF] via-[#246CFF] to-[#0054FF] hover:from-blue-500 hover:to-blue-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap min-w-fit text-sm"
                >
                  Login / Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
