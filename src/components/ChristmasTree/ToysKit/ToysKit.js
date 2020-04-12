import React from "react";
import Toys from "./Toys/Toys"
import classes from "./ToysKit.module.css";

export default () => (
  <div className={classes.ToysKit}>
    <div className={classes.Sec}></div>
    <Toys type="red"/>
    <Toys type="blue"/>
    <Toys type="yellow"/>
    
  </div>
);
