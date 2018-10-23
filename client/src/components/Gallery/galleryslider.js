import React, { Component } from "react";

import ImageGallery from "react-image-gallery";

import pic1 from "../../images/gallery/gallery1.jpg";
import pic1sm from "../../images/gallery/thumbnails/gallery1_TN.jpg";

import pic2 from "../../images/gallery/gallery2.jpg";
import pic2sm from "../../images/gallery/thumbnails/gallery2_TN.jpg";

import pic3 from "../../images/gallery/gallery3.jpg";
import pic3sm from "../../images/gallery/thumbnails/gallery3_TN.jpg";

import pic4 from "../../images/gallery/gallery4.jpg";
import pic4sm from "../../images/gallery/thumbnails/gallery4_TN.jpg";

import pic5 from "../../images/gallery/gallery5.jpg";
import pic5sm from "../../images/gallery/thumbnails/gallery5_TN.jpg";

import pic6 from "../../images/gallery/gallery6.jpg";
import pic6sm from "../../images/gallery/thumbnails/gallery6_TN.jpg";

import pic7 from "../../images/gallery/gallery7.jpg";
import pic7sm from "../../images/gallery/thumbnails/gallery7_TN.jpg";
import pic8 from "../../images/gallery/gallery8.jpg";
import pic8sm from "../../images/gallery/thumbnails/gallery8_TN.jpg";
import pic9 from "../../images/gallery/gallery9.jpg";
import pic9sm from "../../images/gallery/thumbnails/gallery9_TN.jpg";
import pic10 from "../../images/gallery/gallery10.jpg";
import pic10sm from "../../images/gallery/thumbnails/gallery10_TN.jpg";
import pic11 from "../../images/gallery/gallery11.jpg";
import pic11sm from "../../images/gallery/thumbnails/gallery11_TN.jpg";
import pic12 from "../../images/gallery/gallery12.jpg";
import pic12sm from "../../images/gallery/thumbnails/gallery12_TN.jpg";
import pic13 from "../../images/gallery/gallery13.jpg";
import pic13sm from "../../images/gallery/thumbnails/gallery13_TN.jpg";
import pic14 from "../../images/gallery/gallery14.jpg";
import pic14sm from "../../images/gallery/thumbnails/gallery14_TN.jpg";

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
      },
      {
        original: `${pic7}`,
        thumbnail: `${pic7sm}`
      },
      {
        original: `${pic8}`,
        thumbnail: `${pic8sm}`
      },
      {
        original: `${pic9}`,
        thumbnail: `${pic9sm}`
      },
      {
        original: `${pic10}`,
        thumbnail: `${pic10sm}`
      },
      {
        original: `${pic11}`,
        thumbnail: `${pic11sm}`
      },
      {
        original: `${pic12}`,
        thumbnail: `${pic12sm}`
      },
      {
        original: `${pic13}`,
        thumbnail: `${pic13sm}`
      },
      {
        original: `${pic14}`,
        thumbnail: `${pic14sm}`
      }
    ];

    return <ImageGallery items={images} />;
  }
}

export default GallerySlider;
