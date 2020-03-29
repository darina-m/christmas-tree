import React from "react";
import Toolbar from "./Toolbar/Toolbar.js"
import Drawer from "./Drawer/Drawer.js"

export default ({ children }) => (
    <div className="Layout">
        <Toolbar/>
       <Drawer/>
       { children }
    </div>
);