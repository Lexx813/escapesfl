import React from "react";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-125150549-1');
ReactGA.pageview(window.location.pathname + window.location.search);
import { Element } from "react-scroll";
import Featured from "../Featured";
import About from "../About";
import Services from "../Details";
import Icons from "../homeicons";
import Gallery from "../Gallery";
import ContactForm from "../ContactForm";
import Location from "../Location";
// UA-125150549-1
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
