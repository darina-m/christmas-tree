import React from "react";
import Toys from "./Toys/Toys"
import classes from "./ToysKit.module.css";

export default () => (
  <div className={classes.ToysKit}>
    <div className={classes.Sec}></div>
    <Toys type="red"/>
    <Toys type="yellow"/>
    <Toys type="blue"/>
    <Toys/>
    <Toys type="yellow"/>
    
  </div>
);
