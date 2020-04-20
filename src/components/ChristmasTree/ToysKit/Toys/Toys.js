import React from "react";
import classes from "./Toys.module.css";
 export default ({type}) =>{
    const toysClasses = [
        classes.Toys,
        classes[type]
    ];

     return(
        <div className={toysClasses.join(" ")}>
         
        </div>
    );
 }
