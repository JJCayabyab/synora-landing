// LandingPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/LandingPage/Hero";
import Statistics from "../sections/LandingPage/Statistics";
import Partners from "../sections/LandingPage/Partners";
import Features from "../sections/LandingPage/Features";
import About from "../sections/LandingPage/About";
import Pricing from "../sections/LandingPage/Pricing";
import Contacts from "../sections/LandingPage/Contacts";
import Footer from "../components/Footer";

const LandingPage = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section id="home" className="scroll-mt-16">
        <Hero />
      </section>

      <section id="statistics" className="scroll-mt-16">
        <Statistics />
      </section>

      <section id="partners" className="scroll-mt-16">
        <Partners />
      </section>

      <section id="features" className="scroll-mt-16">
        <Features darkMode={darkMode} />
      </section>

      <section id="about" className="scroll-mt-16">
        <About />
      </section>

      <section id="pricing" className="scroll-mt-16">
        <Pricing />
      </section>

      <section id="contact" className="scroll-mt-16">
        <Contacts darkMode={darkMode} />
      </section>
      <Footer  darkMode={darkMode}/>
    </>
  );
};

export default LandingPage;
