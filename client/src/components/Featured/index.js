import React from "react";
import Carrousel from "./Carrousel";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper ">Escape The Ordinary</div>
                 <h3 className="wrapper__buttontitle">Start Your Escape!</h3>
                 <a className="btn btn-success btn-lg" href="#contact">Start Here!</a>
      </div>
    </div>
  );
};

export default Featured;
