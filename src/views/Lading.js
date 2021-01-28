import React from "react";

import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";
import bg from '../assets/img/bg1.jpg';

import Hero from '../components/Hero';
import About from "../components/About";
import Trainers from "../components/Trainers";
import Contact from "../components/Contact";
import Contactform from "../components/Contact-form";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <Hero/>

        {/* About section */}

        <About/>
        <Trainers/>
        <Contact/>
        <Contactform/>


      

        
       
      </main>
      <Footer />
    </>
  );
}
