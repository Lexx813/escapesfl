import React, { Component } from "react";
import LayOut from "./hoc/layout";
import LandingPage from "./components/Landing";

class Routes extends Component {
  render() {
    return (
      <LayOut>
        <LandingPage />
      </LayOut>
    );
  }
}

export default Routes;
