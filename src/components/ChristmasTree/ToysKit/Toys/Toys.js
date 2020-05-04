import React, { memo } from "react";
import classes from "./Toys.module.css";

export default memo(({ type }) => {
  const toysClasses = [classes.Toys, classes[type]];

  const pd = 50;
  const th = 430;
  const tw = 300;

  let stylePos = null;
  const getPosition = (ir) => {
    const ix = Math.floor(Math.random() * tw, 20);
    const iy = Math.floor(Math.random() * th, 20);

    const distance =
      Math.sqrt(Math.pow(ix - th, 2) + Math.pow(iy - th, 2)) + ir;

    return distance < th ? { x: ix - ir, y: iy - ir } : getPosition(pd);
  };

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

  const position = getPosition(110 / 6);

  stylePos = {
    position: "absolute",
    top: position.y + "px",
    left: position.x + "px",
  };
  return <div style={stylePos} className={toysClasses.join(" ")}></div>;
});
