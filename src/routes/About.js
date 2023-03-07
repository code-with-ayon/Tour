import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import AboutImg from "../assets/night.jpg"
import Footer from '../Components/Footer'
import Aboutus from '../Components/Aboutus'

const About = () => {
  return (
    <>
      <Navbar/>
      <Hero cName="hero-mid"
      heroImg= {AboutImg}
      title="About"
      />
      <Aboutus/>
      <Footer/>
      </>
  )
}

export default About