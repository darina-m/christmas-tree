import React from "react";
import Toys from "./Toys/Toys"
import classes from "./ToysKit.module.css";

export default ({toys}) => {
  let toysOutput = [];

Object.keys(toys).forEach(type => {
  for (let i = 0; i < toys[type]; i++) {
toysOutput.push(<Toys key={type + i} type={type}/>);
  }
});

toysOutput.sort((a,b)=> Math.random() < 0.5 ? 1 : -1);

  return (
    <div className={classes.ToysKit}>
    <div className={classes.Sec}></div>
    {toysOutput}
  </div>
  );
  };
