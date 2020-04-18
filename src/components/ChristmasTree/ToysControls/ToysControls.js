import React from "react";
import ToysControl from "./ToysControl/ToysControl"; 
import classes from "./ToysControls.module.css";

export default ({addToy,removeToy})=>{
const controls = [
  {label:"Red", type:"red"},
  {label:"Blue", type:"blue"},
  {label:"Yellow", type:"yellow"},
];

const controlsOutput = controls.map((control) =>(
<ToysControl control={control} addToy={addToy} removeToy={removeToy}/>
));

    return(
        <div className={classes.ToysControls}>
         {controlsOutput}
        </div>
    );
}