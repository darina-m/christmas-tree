import React from "react";
import Logo from "../../UI/Logo/Logo";
import NavigationItem from "../../Layout/Toolbar/Navigation/Navigation";
import classes from "./Drawer.module.css";

export default () => (
  <div className={classes.Drawer}>
    <Logo />
    <NavigationItem/>
  </div>
);
