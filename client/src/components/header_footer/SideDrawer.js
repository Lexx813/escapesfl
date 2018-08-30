import React from "react";
import { scroller } from "react-scroll";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing.unit * 3
  }
});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const SideDrawer = props => {
  const { classes } = props;

  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
    props.onClose(false);
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List
        style={{
          fontSize: 16,
          width: 210,
          fontWeight: 500,
          marginLeft: 4
        }}
        component="nav"
      >
        <ListItem button onClick={() => scrollToElement("home")}>
          <HomeIcon className={classes.icon} /> Home
        </ListItem>
        <Divider />
        <ListItem button onClick={() => scrollToElement("about")}>
          About Us
        </ListItem>
        <Divider />
        <ListItem button onClick={() => scrollToElement("services")}>
          Services
        </ListItem>
        <Divider />
        <ListItem button onClick={() => scrollToElement("gallery")}>
          Image Gallery
        </ListItem>
        <Divider />
        <ListItem button onClick={() => scrollToElement("contact")}>
          Contact us
        </ListItem>
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(SideDrawer);
