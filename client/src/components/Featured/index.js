import React from "react";
import Carrousel from "./Carrousel";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper  heading-primary heading-primary--main">
          Escape The Ordinary
        </div>
        <h3 className="heading-primary heading-primary--sub">
          {" "}
          Start Your Escape!{" "}
        </h3>
        <a className="btn btn--green" href="#contact">
          Start Here!
        </a>
      </div>
    </div>
  );
};

export default Featured;
