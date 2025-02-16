import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const {isDarkMode} =useContext(AppContext);

  return (
    <div
      className={` w-full shadow-lg flex items-center justify-between gap-4 py-3 px-4 lg:px-10  mt-20    ${
        isDarkMode ? "bg-gray-200  shadow-lg" : ""
      }`}
    >
      {" "}
      <img src={assets.logo1} alt=""  className="w-28 sm:w-32 lg:w-40" />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden ">
        Copyright @pratyashapanda | All rights reserved.
      </p>
      <div className="flex gap-2.5 ">
        <img src={assets.facebook_icon} alt="" width={35} className="hover:scale-110 transition-all cursor-pointer" />
        <img src={assets.twitter_icon} alt="" width={35} className="hover:scale-110 transition-all cursor-pointer" />
        <img src={assets.instagram_icon} alt="" width={35} className="hover:scale-110 transition-all cursor-pointer"/>
      </div>
    </div>
  );
};

export default Footer;
