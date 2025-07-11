//import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white shadow-md py-4 px-6 sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <img
            src="/images/Zuru Shuttles.png"
            alt="Zuru Shuttles Logo"
            className="w-35 h-35 object-contain rounded-full border-2 border-yellow-400"
          />
          <h1 className="text-xl md:text-2xl font-bold text-yellow-400">
            Zuru Shuttles
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-4 text-sm sm:text-base font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                : "hover:text-yellow-400 transition-duration-200 pb-1"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/booking"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                : "hover:text-yellow-400 transition-duration-200 pb-1"
            }
          >
            Booking
          </NavLink>
          <NavLink
            to="/summary"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                : "hover:text-yellow-400 transition-duration-200 pb-1"
            }
          >
            Summary
          </NavLink>
          <NavLink
            to="/location"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                : "hover:text-yellow-400 transition-duration-200 pb-1"
            }
          >
            Locate Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;