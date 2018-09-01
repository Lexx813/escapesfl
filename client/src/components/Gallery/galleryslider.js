import React, { Component } from "react";

import ImageGallery from "react-image-gallery";

import pic1 from "../../images/gallery/gallery_1.jpg";
import pic1sm from "../../images/gallery/thumbnails/gallery_1_TN.jpg";

import pic2 from "../../images/gallery/gallery_2.png";
import pic2sm from "../../images/gallery/thumbnails/gallery_2_TN.png";

import pic3 from "../../images/gallery/gallery_3.jpg";
import pic3sm from "../../images/gallery/thumbnails/gallery_3_TN.jpg";

import pic4 from "../../images/gallery/gallery_4.jpg";
import pic4sm from "../../images/gallery/thumbnails/gallery_4_TN.jpg";

import pic5 from "../../images/gallery/gallery_5.jpg";
import pic5sm from "../../images/gallery/thumbnails/gallery_5_TN.jpg";

import pic6 from "../../images/gallery/gallery_6.jpg";
import pic6sm from "../../images/gallery/thumbnails/gallery_6_TN.jpg";

import pic7 from "../../images/gallery/gallery_7.png";
import pic7sm from "../../images/gallery/thumbnails/gallery_7_TN.png";

class GallerySlider extends Component {
  render() {
    const images = [
      {
        original: `${pic7}`,
        thumbnail: `${pic7sm}`
      },
      {
        original: `${pic1}`,
        thumbnail: `${pic1sm}`
      },
      {
        original: `${pic2}`,
        thumbnail: `${pic2sm}`
      },
      {
        original: `${pic3}`,
        thumbnail: `${pic3sm}`
      },
      {
        original: `${pic4}`,
        thumbnail: `${pic4sm}`
      },
      {
        original: `${pic5}`,
        thumbnail: `${pic5sm}`
      },
      {
        original: `${pic6}`,
        thumbnail: `${pic6sm}`
      }
    ];

    return <ImageGallery items={images} />;
  }
}

export default GallerySlider;
