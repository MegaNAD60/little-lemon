import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AboutMain from "../components/AboutMain";

function About() {
  return (
    <>
      <div className='container'>
        <Header />
        <Nav />
        <AboutMain />
        <Footer />
      </div>
    </>
  );
}

export default About;
