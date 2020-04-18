import React from "react";
import ToysControl from "./ToysControl/ToysControl"; 
import classes from "./ToysControls.module.css";

const CONTROLS = [
  {label:"Red", type:"red"},
  {label:"Blue", type:"blue"},
  {label:"Yellow", type:"yellow"},
];

export default ({toys, addToy,removeToy})=>{

const controlsOutput = CONTROLS.map((control) =>(
<ToysControl 
control={control} 
addToy={addToy} 
removeToy={removeToy}
disabled={toys[control.type] === 0}
/>
));

    return(
        <div className={classes.ToysControls}>
         {controlsOutput}
        </div>
    );
}