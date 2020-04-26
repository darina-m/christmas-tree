import React from "react";
import logo from "../../../assests/logo.png";
import classes from "./Logo.module.css";

export default () => (
    <div className={classes.Logo}>
     <img src={logo} />
     <span>Christamas-Tree</span>
    </div>
);