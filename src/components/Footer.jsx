import React from "react";
import Container from "./Container";
import logo from "../assets/Synora.png";
import { footerIcons } from "../data/LandingPageData";

const Footer = ({ darkMode }) => {
  return (
    <div className="bg-gray-100 dark:bg-[#1e293b]">
      <div
        className="mx-auto max-w-7xl px-6 py-5
        sm:px-8 sm:py-6
        md:px-14 md:py-9
        lg:px-14 lg:py-11"
      >
        <div className="flex flex-col gap-5 items-center justify-center md:flex-row lg:justify-between">
          <div className="flex ">
            <div className="flex  items-center">
              <img className="size-10" src={logo} />
              <h1
                className="font-heading text-sm font-bold  bg-gradient-to-r from-[#6366f1] to-[#ec4899] bg-clip-text text-transparent
                          md:text-md"
              >
                Synora
              </h1>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center gap-2 font-body text-sm items-center">
              <a
                href="#home"
                className="font-body font-semibold text-heading-1 hover:text-indigo-400"
              >
                Home
              </a>
              <a
                href="#about"
                className="font-body font-semibold text-heading-1 hover:text-indigo-400"
              >
                About
              </a>
              <a
                href="#features"
                className="font-body font-semibold text-heading-1 hover:text-indigo-400"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="font-body font-semibold text-heading-1 hover:text-indigo-400"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="font-body font-semibold text-heading-1 hover:text-indigo-400"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            {footerIcons.map((icon, index) => (
              <a href={icon.href} target="_blank">
                <img
                  key={index}
                  src={darkMode ? icon.iconDark : icon.icon}
                  alt={icon.name}
                  className="w-6 h-6 cursor-pointer hover:opacity-70 transition"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="text-heading-1 text-sm text-center">
          Icons from <a href="https://www.flaticon.com"> Flaticon</a>
          <br />© 2025 Synora. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
