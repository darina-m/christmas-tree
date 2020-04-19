import React from "react";
import classes from "./ToysControl.module.css"

export  default ({control , removeToy, addToy , disabled}) => (
    <div className={classes.ToysControl}>
<span className={classes.label}>{control.label}</span>
<button 
className={classes.less} 
onClick={()=>removeToy(control.type)}
disabled={disabled}
>
-
</button>
<button 
className={classes.more} 
onClick={()=>addToy(control.type)}
>
+
</button>
    </div>
);