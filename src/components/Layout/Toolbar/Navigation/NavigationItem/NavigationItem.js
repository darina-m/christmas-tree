import React from "react";
import classes from "./NavigationItem.module.css";

export default ({ children, url }) => (
  <li>
    <a href={url}>{children}</a>
  </li>
);
