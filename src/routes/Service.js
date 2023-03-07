import React from 'react'
import AboutImg from "../assets/pic2.jpg"
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Trip from '../Components/Trip'

const Service = () => {
  return (
    <>
    <Navbar/>
    <Hero cName="hero-mid"
    heroImg= {AboutImg}
    title="Service"
    />
    <Trip/>
    <Footer/>
    </>
  )
}

export default Service