import React from "react";
import Aboutpic from "../../images/about/about.jpg";
const About = () => {
  return (
    <div className="py-4  about">
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <h1 className=" about__text-title text-center">About Us</h1>
            <p>
              We know you work hard each and every day. You deserve to be able
              to come home and Escape into a gorgeous, peaceful, inviting
              outdoor area . At Escapes Outdoor Living, we fully handle a
              project from Start to Finish. We are fully involved in the design,
              management and installation. We love each phase of our projects
              and we approach each with 100% effort.
            </p>
            <p>
              Escapes started as a family business, so we love creating Outdoor
              Spaces that can be used for families of all sizes and ages. We
              pride ourselves in approaching each project as its own individual
              design and strive to create each with its own unique character. In
              addition to building outdoor living spaces for our clients, we
              enjoy taking on Driveways, Walkways, Retaining Walls and other
              Custom Structures.
            </p>
          </div>
          <div className="col-md-6 about-c">
            <img
              src={Aboutpic}
              alt="guy"
              className="about-img img-fluid text-center  d-none d-md-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
