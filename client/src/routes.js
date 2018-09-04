import React, { Component } from "react";
import LayOut from "./hoc/layout";
import LandingPage from "./components/Landing";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-125150549-1');
ReactGA.pageview(window.location.pathname + window.location.search);

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
