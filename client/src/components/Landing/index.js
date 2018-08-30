import React from "react";
import { Element } from "react-scroll";
import Featured from "../Featured";
import About from "../About";
import Services from "../Details";
import Icons from "../homeicons";
import Gallery from "../Gallery";
import ContactForm from "../ContactForm";
import Location from "../Location";

const LandingPage = () => {
  return (
    <div>
      <Element name="home">
        <Featured />
      </Element>
      <Icons />
      <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="gallery">
        <Gallery />
      </Element>

      <Location />
      <Element name="contact">
        <ContactForm />
      </Element>
    </div>
  );
};

export default LandingPage;
