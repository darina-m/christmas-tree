import React from "react";
import ToysKit from "../../components/ChristmasTree/ToysKit/ToysKit"
import classes from "./ChristmasTree.module.css";

export default ({ children }) => (
    <div className={classes.ChristmasTree}>
       <ToysKit image="https://thumbs.dreamstime.com/z/%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D0%B0%D1%8F-%D1%80%D0%BE%D0%B6%D0%B4%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F-%D0%B5%D0%BB%D0%BA%D0%B0-%D1%82%D1%80%D0%B0%D0%B4%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-104381843.jpg"/>
       ToysControls
    </div>
);