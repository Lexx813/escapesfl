// import React, { Component } from 'react';
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import SideDrawer from "./SideDrawer";

import Logo from "../../images/logo/logo.png";

class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true
      });
    } else {
      this.setState({
        headerShow: false
      });
    }
  };

  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? "#fff" : "transparent",
          boxShadow: this.state.headerShow ? "" : "none",
          height: this.state.headerShow ? "70px" : "150px",
          padding: "2px 0px"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <img
              style={{ width: this.state.headerShow ? "150px" : "300px" }}
              src={Logo}
              alt="logo"
            />
          </div>

          <IconButton aria-label="Menu" onClick={() => this.toggleDrawer(true)}>
            <MenuIcon
              style={{
                fontSize: "30px",
                color: "#219442"
              }}
            />
          </IconButton>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
