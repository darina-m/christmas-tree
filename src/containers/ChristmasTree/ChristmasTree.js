import React from "react";
import ToysKit from "../../components/ChristmasTree/ToysKit/ToysKit"
import classes from "./ChristmasTree.module.css";

export default ({ children }) => (
    <div className={classes.ChristmasTree}>
       <ToysKit/>
       ToysControls
    </div>
);