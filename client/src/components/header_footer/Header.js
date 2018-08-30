// import React, { Component } from 'react';
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import SideDrawer from "./SideDrawer";

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
          padding: "6px 0px"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_lobster header_logo_venue"> Escapes </div>
            <div className="header_logo_title">Outdoor Living</div>
          </div>

          <IconButton aria-label="Menu" onClick={() => this.toggleDrawer(true)}>
            <MenuIcon
              style={{
                fontSize: "30px",
                color: "#436e4f"
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
