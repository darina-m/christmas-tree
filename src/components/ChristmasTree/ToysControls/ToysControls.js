import React from "react";
import ToysControl from "./ToysControl/ToysControl"; 
import classes from "./ToysControls.module.css";

export default ()=>{
const controls = [
  {label:"Red", type:"red"},
  {label:"Blue", type:"blue"},
  {label:"Yellow", type:"yellow"},
];

const controlsOutput = controls.map((control) =>(
<ToysControl label={control.label}/>
));

    return(
        <div className={classes.ToysControls}>
         {controlsOutput}
        </div>
    );
}