import React , {useState} from "react";
import ToysKit from "../../components/ChristmasTree/ToysKit/ToysKit";
import ToysControls from "../../components/ChristmasTree/ToysControls/ToysControls";
import classes from "./ChristmasTree.module.css";

export default () => {
const [toys , setToys] = useState({
yellow:1,
blue:3,
red:3,
});

  return  (
  <div className={classes.ChristmasTree}>
       <ToysKit toys={toys} />
       <ToysControls/>
    </div>
  );
};
