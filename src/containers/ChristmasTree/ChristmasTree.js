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

function addToy(type){
const newToys = {...toys};
newToys[type]++;
setToys(newToys);
}

function removeToy(type){
  if(toys[type] >=1) {
    const newToys = {...toys};
  newToys[type]--;
  setToys(newToys);
  }
  
}

  return  (
  <div className={classes.ChristmasTree}>
       <ToysKit toys={toys} />
       <ToysControls
       addToy={addToy}
       removeToy={removeToy} />
    </div>
  );
};
