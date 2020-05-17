import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

export default ({ children, url }) => (
  <li className={classes.NavigationItem}>
    <NavLink to={url} activeClassName={classes.active} exact>
      {children}
    </NavLink>
  </li>
);
