import React from "react";
import Slider from "react-slick";

import slide_one from "../../images/carrousel/slide_one.jpg";
import slide_two from "../../images/carrousel/slide_two.jpg";
import slide_three from "../../images/carrousel/slide_three.png";

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),url(${slide_one})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),url(${slide_two})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),url(${slide_three})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
