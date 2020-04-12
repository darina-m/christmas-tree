import React from "react";
import classes from "./Toys.module.css";
 export default ({type}) =>{
    const toysClasses = [classes.Toys];

     switch (type) {
case "yellow":
    toysClasses.push(classes.yellow)
    break;
    case "blue":
    break;
    case "red":
        default:
    break;
     }
     return(
        <div className={toysClasses.join(" ")}>
         
        </div>
    );
 }
