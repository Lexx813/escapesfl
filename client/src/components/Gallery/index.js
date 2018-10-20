import React from "react";
import GallerySlider from "./galleryslider";

const Gallery = () => {
  return (
    <div className="u-center-text ">
      <h3 className=" heading-secondary  u-margin-bottom-medium u-margin-top-big ">
        Image Gallery
      </h3>
      <GallerySlider />
    </div>
  );
};

export default Gallery;
