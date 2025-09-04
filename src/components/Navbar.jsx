import React, { useState } from "react";
import logo from "../assets/Synora.png";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className="w-full fixed top-0 z-50 bg-body shadow-md h-16 flex items-center px-5 justify-between
                 sm:px-7 md:px-14 lg:px-14 xl:px-36"
    >
      <button
        className="md:hidden text-2xl text-heading-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      <a
        href="#home"
        className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
      >
        <div className="flex items-center w-40 gap-2 justify-center">
          <img className="size-10" src={logo} alt="Synora Logo" />
          <h1
            className="font-heading text-lg font-bold bg-gradient-to-r from-[#6366f1] to-[#ec4899] bg-clip-text text-transparent
                       md:text-xl"
          >
            Synora
          </h1>
        </div>
      </a>

      <div className="hidden md:flex font-body text-heading-1 font-semibold gap-x-2 text-md">
        <a
          href="#home"
          className="px-4 py-2 rounded-md hover:bg-indigo-500 hover:text-white transition"
        >
          Home
        </a>
        <a
          href="#about"
          className="px-4 py-2 rounded-md hover:bg-indigo-500 hover:text-white transition"
        >
          About
        </a>
        <a
          href="#features"
          className="px-4 py-2 rounded-md hover:bg-indigo-500 hover:text-white transition"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="px-4 py-2 rounded-md hover:bg-indigo-500 hover:text-white transition"
        >
          Pricing
        </a>
        <a
          href="#contact"
          className="px-4 py-2 rounded-md hover:bg-indigo-500 hover:text-white transition"
        >
          Contact
        </a>
      </div>

      <div className="w-10 sm:w-40 flex justify-end">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gradient-to-r from-[#79d7e8] to-[#cdf5fc] 
                     dark:from-[#434f6b] dark:to-[#1e293b]"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-body text-heading-1 shadow-md flex flex-col md:hidden">
          <a
            href="#home"
            onClick={handleLinkClick}
            className="px-4 py-2 hover:bg-indigo-500 hover:text-white"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={handleLinkClick}
            className="px-4 py-2 hover:bg-indigo-500 hover:text-white"
          >
            About
          </a>
          <a
            href="#features"
            onClick={handleLinkClick}
            className="px-4 py-2 hover:bg-indigo-500 hover:text-white"
          >
            Features
          </a>
          <a
            href="#pricing"
            onClick={handleLinkClick}
            className="px-4 py-2 hover:bg-indigo-500 hover:text-white"
          >
            Pricing
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="px-4 py-2 hover:bg-indigo-500 hover:text-white"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
