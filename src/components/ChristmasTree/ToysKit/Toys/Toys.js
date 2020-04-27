import React from "react";
import classes from "./Toys.module.css";

export default ({ type }) => {
  const toysClasses = [classes.Toys, classes[type]];

 /*let stylePos = null;
    const getPosition = (ir) => {
      const pd = 210;
      const pr = pd / 2;
  
      const ix = Math.round(Math.random(1) * pd);
      const iy = Math.round(Math.random(2) * pd - pr);
  
      const distance =
        Math.sqrt(Math.pow(ix - pr, 2) + Math.pow(iy - pr, 2)) + ir;
        
   return distance < pr ? { x: ix - ir, y: iy - ir } : getPosition(ir);
  };*/

  switch (type) {
    case "yellowBall":
      toysClasses.push(classes.yellowBall);
      break;
    case "greenBall":
      toysClasses.push(classes.greenBall);
      break;
    case "orangeBall":
      toysClasses.push(classes.orangeBall);
      break;
    case "pinkBall":
      toysClasses.push(classes.pinkBall);
      break;
    case "lightBlueBall":
      toysClasses.push(classes.lightBlueBall);
      break;
    case "blueBall":
    default:
      toysClasses.push(classes.blueBall);
      break;
  }

  /*const position = getPosition(50 / 2);

 stylePos = {
    position: "absolute",
    top: position.y + "px",
    left: position.x + "px",
     width: 30 + "px",
      height: 30 + "px"
  };*/
  
//style={stylePos}
  return <div  className={toysClasses.join(" ")}></div>;
  
};
