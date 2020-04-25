import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.module.css";

export default () => (
  <ul className={classes.Navigation}>
    <NavigationItem >Christmas-tree</NavigationItem>
    <NavigationItem >Checkout</NavigationItem>
  </ul>
);
