import React from 'react'
import Destination from '../Components/Destination';
import Trip from '../Components/Trip';
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';

function Home (){
  return (
    <>
      <Navbar/>
      <Hero cName="hero"
      heroImg="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_640.jpg"
      title="Your Journey Your Story"
      text= "Choose your favourite Destination"
      buttonText="Travel Plan"
      url="/"
      btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
      </>
  );
}

export default Home