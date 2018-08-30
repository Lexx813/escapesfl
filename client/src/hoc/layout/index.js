import React from "react";
import Header from "../../components/header_footer/Header";
import Footer from "../../components/header_footer/Footer";

const LayOut = props => {
  return (
    <div>
      <Header />
      <div> {props.children} </div>
      <Footer />
    </div>
  );
};

export default LayOut;
