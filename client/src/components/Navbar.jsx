import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, setShowLogin, logout, credit, isDarkMode, setIsDarkMode } =
    useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 shadow-lg flex items-center justify-between py-4 px-4 lg:px-10 transition-all duration-500 ${
        isDarkMode ? "bg-gray-200" : "bg-white"
      }`}
    >
      {/* Logo */}
      <Link to={"/"}>
        <img src={assets.logo1} alt="" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      {/* Right-side Items */}
      <div className="flex items-center gap-3 sm:gap-5 max-sm:gap-2">
        {/* Dark Mode Toggle */}
        <div className="relative group">
          <div
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`drop-shadow-md cursor-pointer p-3 hover:scale-105 rounded-full transition-all duration-500 ease-in-out ${
              isDarkMode ? "bg-blue-100" : "bg-gray-50"
            }`}
          >
            {isDarkMode ? (
              <img src={assets.sun_icon} className="w-5" alt="Light Mode" />
            ) : (
              <img src={assets.moon_icon} className="w-5" alt="Dark Mode" />
            )}
          </div>
          <div className="absolute hidden group-hover:block top-[120%] left-1/2 transform -translate-x-1/2 z-10 bg-white text-black text-sm rounded p-3 shadow-md text-nowrap">
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </div>
        </div>

        {/* User Actions */}
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Credits */}
            <button
              onClick={() => navigate("/buy")}
              className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700"
            >
              <img className="w-5" src={assets.credit_star} alt="Credits" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credits left: {credit}
              </p>
            </button>

            {/* Greeting */}
            <p className="text-gray-600 max-sm:hidden pl-4">Hi, {user.name}</p>

            {/* Profile Menu */}
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="Profile"
                className="w-10 drop-shadow"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li
                    onClick={logout}
                    className="py-1 px-2 cursor-pointer pr-10"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p onClick={() => navigate("/buy")} className="cursor-pointer dark:text-black">
              Pricing
            </p>
            <button
              className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
