import React , {useState} from "react";
import ToysKit from "../../components/ChristmasTree/ToysKit/ToysKit";
import ToysControls from "../../components/ChristmasTree/ToysControls/ToysControls";
import classes from "./ChristmasTree.module.css";

const PRICES = {
  blueBall:7,
  pinkBall:9,
  yellowBall:10,
  orangeBall:8,
  lightBlueBall:12,
  greenBall:8,
};

export default () => {
const [toys , setToys] = useState({
blueBall:0,
pinkBall:0,
yellowBall:0,
orangeBall:0,
lightBlueBall:0,
greenBall:0
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
       toys={toys}
       addToy={addToy}
       removeToy={removeToy} />
    </div>
  );
};
