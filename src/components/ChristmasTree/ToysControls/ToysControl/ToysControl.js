import React from "react";
import classes from "./ToysControl.module.css"

export  default ({control , removeToy, addToy}) => (
    <div className={classes.ToysControl}>
<span className={classes.label}>{control.label}</span>
<button className={classes.less} onClick={()=>removeToy(control.type)}>Less</button>
<button className={classes.more} onClick={()=>addToy(control.type)}>More</button>
    </div>
);