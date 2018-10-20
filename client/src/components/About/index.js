import React from "react";

import p1 from "../../images/gallery/gallery_1.jpg";
import p2 from "../../images/gallery/gallery_4.jpg";
import p3 from "../../images/gallery/gallery_6.jpg";

const About = () => {
  return (
    <div className="section-about u-margin-bottom-big">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">About Us</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <p className="paragraph">
            We know you work hard each and every day. You deserve to be able to
            come home and Escape into a gorgeous, peaceful, inviting outdoor
            area . At Escapes Outdoor Living, we fully handle a project from
            Start to Finish. We are fully involved in the design, management and
            installation. We love each phase of our projects and we approach
            each with 100% effort.
          </p>
          <p className="paragraph">
            Escapes started as a family business, so we love creating Outdoor
            Spaces that can be used for families of all sizes and ages. We pride
            ourselves in approaching each project as its own individual design
            and strive to create each with its own unique character. In addition
            to building outdoor living spaces for our clients, we enjoy taking
            on Driveways, Walkways, Retaining Walls and other Custom Structures.
          </p>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={p1}
              alt=""
              className="composition__photo composition__photo--p1"
            />
            <img
              src={p2}
              alt=""
              className="composition__photo composition__photo--p2"
            />
            <img
              src={p3}
              alt=""
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
