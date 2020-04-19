import React from "react";
import ToysControl from "./ToysControl/ToysControl"; 
import classes from "./ToysControls.module.css";

const CONTROLS = [
  {label:"Pink", type:"pinkBall"},
  {label:"Orange", type:"orangeBall"},
  {label:"Green", type:"greenBall"},
  {label:"Light Blue", type:"lightBlueBall"},
  {label:"Blue", type:"blueBall"},
  {label:"Yellow", type:"yellowBall"},
];

export default ({toys, addToy,removeToy})=>{

const controlsOutput = CONTROLS.map((control) =>(
<ToysControl 
key={control.type}
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