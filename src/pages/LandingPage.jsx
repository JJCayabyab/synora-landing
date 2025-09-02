import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/LandingPage/Hero'
import Features from '../sections/LandingPage/Features'
import Statistics from '../sections/LandingPage/Statistics'
import Footer from '../components/Footer'
import About from '../sections/LandingPage/About'
import Contacts from '../sections/LandingPage/Contacts'
import Partners from '../sections/LandingPage/Partners'
const LandingPage = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Statistics />
      <Partners />
      <About />
      <Features darkMode={darkMode} />
      <Contacts />
      <Footer />
    </>
  )
}

export default LandingPage