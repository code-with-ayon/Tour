import React from 'react'
import Hero from '../Components/Hero'
import AboutImg from "../assets/pic3.jpg"
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactForm'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <Hero cName="hero-mid"
    heroImg= {AboutImg}
    title="Contact"
    />
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contact