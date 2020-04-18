import React , {useState} from "react";
import ToysKit from "../../components/ChristmasTree/ToysKit/ToysKit";
import ToysControls from "../../components/ChristmasTree/ToysControls/ToysControls";
import classes from "./ChristmasTree.module.css";

const PRICES = {
yellow:5,
red:3,
blue:6,
};

export default () => {
const [toys , setToys] = useState({
yellow:0,
blue:0,
red:0,
});

const [price, setPrice] = useState(100);

function addToy(type){
const newToys = {...toys};
newToys[type]++;
setToys(newToys);

const newPrice = price + PRICES[type];
setPrice(newPrice);
}

function removeToy(type){
  if(toys[type] >=1) {
    const newToys = {...toys};
  newToys[type]--;
  setToys(newToys);

  const newPrice = price - PRICES[type];
setPrice(newPrice);
  }
  
}

  return  (
  <div className={classes.ChristmasTree}>
       <ToysKit price={price} toys={toys} />
       <ToysControls
       addToy={addToy}
       removeToy={removeToy} />
    </div>
  );
};
