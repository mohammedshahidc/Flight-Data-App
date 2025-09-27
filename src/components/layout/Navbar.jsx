import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-green-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center text-white font-bold text-xl lg:text-2xl">
              <span className="mr-2 text-2xl lg:text-3xl">✈</span>
              ALMUSAFEER
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <a href="#" className="text-white hover:text-blue-200 font-medium transition-colors duration-200">
              Home
            </a>
            <span className="text-blue-200">/</span>
            <a href="#" className="text-white hover:text-blue-200 font-medium transition-colors duration-200">
              My Booking
            </a>
            <span className="text-blue-200">/</span>
            <a href="#" className="text-white hover:text-blue-200 font-medium transition-colors duration-200">
              Register
            </a>
            <span className="text-blue-200">/</span>
            <a href="#" className="text-white hover:text-blue-200 font-medium transition-colors duration-200">
              Login
            </a>
            <span className="text-blue-200">/</span>
            <a href="#" className="text-white hover:text-blue-200 font-medium transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* Right Section - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Currency/Country Selector */}
            <div className="flex items-center bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full px-4 py-2 cursor-pointer transition-all duration-200 border border-white border-opacity-20">
              <div className="w-5 h-3.5 mr-2 rounded-sm bg-gradient-to-b from-green-500 via-white to-red-500 flex-shrink-0"></div>
              <span className="text-white font-medium text-sm">KWD</span>
            </div>
            
            {/* Arabic Text */}
            <div className="text-white font-medium">
              العربية
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-blue-200 focus:outline-none focus:text-blue-200 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700 bg-opacity-95 rounded-lg mt-2">
              <a
                href="#"
                className="text-white hover:text-blue-200 block px-3 py-2 font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 block px-3 py-2 font-medium transition-colors duration-200"
              >
                My Booking
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 block px-3 py-2 font-medium transition-colors duration-200"
              >
                Register
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 block px-3 py-2 font-medium transition-colors duration-200"
              >
                Login
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 block px-3 py-2 font-medium transition-colors duration-200"
              >
                Contact
              </a>
              
              {/* Mobile Right Section */}
              <div className="flex items-center justify-between px-3 py-2 border-t border-blue-600 mt-3 pt-3">
                <div className="flex items-center bg-white bg-opacity-10 rounded-full px-3 py-1 cursor-pointer">
                  <div className="w-4 h-3 mr-2 rounded-sm bg-gradient-to-b from-green-500 via-white to-red-500"></div>
                  <span className="text-white font-medium text-sm">KWD</span>
                </div>
                <div className="text-white font-medium">
                  العربية
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;