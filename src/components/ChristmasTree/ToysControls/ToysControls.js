import React from "react";
import ToysControl from "./ToysControl/ToysControl"; 
import classes from "./ToysControls.module.css";

const CONTROLS = [
  {label:"Red", type:"red"},
  {label:"Blue", type:"blue"},
  {label:"Yellow", type:"yellow"},
];

export default ({addToy,removeToy})=>{

const controlsOutput = CONTROLS.map((control) =>(
<ToysControl control={control} addToy={addToy} removeToy={removeToy}/>
));

    return(
        <div className={classes.ToysControls}>
         {controlsOutput}
        </div>
    );
}