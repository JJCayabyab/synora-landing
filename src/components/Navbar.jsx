import React, { useEffect, useState } from "react";
import logo from "../assets/Synora.png";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <nav
        className="w-full  z-100  top-0 fixed  bg-body shadow-md h-16  flex items-center px-5 justify-between
                  sm:px-7
                  md:px-15
                  lg:px-15
                  xl:px-36"
      >
        <div className="flex items-center w-40 0gap-2">
          <img className="size-14" src={logo} />
          <h1
            className="font-heading text-lg font-bold  bg-gradient-to-r from-[#6366f1] to-[#ec4899] bg-clip-text text-transparent
                        md:text-xl"
          >
            Synora
          </h1>
        </div>
        <div
          className="hidden  font-body text-heading-1 font-semibold
                     sm:flex sm:gap-x-0 text-md"
        >
          <a
            href="#home"
            className="px-4 py-2 rounded-md transition-colors duration-300 hover:bg-indigo-500 hover:text-white cursor-pointer"
          >
            <span>Home</span>
          </a>
          <a
            href="#about"
            className="px-4 py-2 rounded-md transition-colors duration-300 hover:bg-indigo-500 hover:text-white cursor-pointer"
          >
            <span>About</span>
          </a>
          <a
            href="#features"
            className="px-4 py-2 rounded-md transition-colors duration-300 hover:bg-indigo-500 hover:text-white cursor-pointer"
          >
            <span>Features</span>
          </a>
          <a
            href="#pricing"
            className="px-4 py-2 rounded-md transition-colors duration-300 hover:bg-indigo-500 hover:text-white cursor-pointer"
          >
            <span>Pricing</span>
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-md transition-colors duration-300 hover:bg-indigo-500 hover:text-white cursor-pointer"
          >
            <span>Contact</span>
          </a>
        </div>

        <div className="w-20 sm:w-40 flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 w-15 rounded-full bg-gradient-to-r from-[#79d7e8] to-[#cdf5fc] 
            dark:from-[#434f6b] dark:to-[#1e293b]"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
