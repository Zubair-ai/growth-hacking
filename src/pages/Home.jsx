import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import AboutUs from "../components/aboutus/AboutUs"
import OurValues from "../components/ourvalues/OurValues";
import Blogs from "../components/Blogs/Blog";
import GetInTuch from "../components/getintuch/GetInTuch";
import Footer from "../components/footer/Footer";
import Testimonials from "../components/testimonials/Testimonials"

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <AboutUs />
      <OurValues />
      <Blogs />
      <GetInTuch />
      <Footer/>
    </>
  );
};

export default Home;
