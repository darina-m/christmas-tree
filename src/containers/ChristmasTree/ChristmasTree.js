import React, { useState } from "react";
import ToysKit from "../../components/ChristmasTree/ToysKit/ToysKit";
import ToysControls from "../../components/ChristmasTree/ToysControls/ToysControls";
import Modal from "../../components/UI/Modal/Modal";
import classes from "./ChristmasTree.module.css";
import OrderSummary from "../../components/ChristmasTree/OrderSummary/OrderSummary";

const PRICES = {
  blueBall: 7,
  pinkBall: 9,
  yellowBall: 10,
  orangeBall: 8,
  lightBlueBall: 12,
  greenBall: 8,
};

export default () => {
  const [toys, setToys] = useState({
    blueBall: 0,
    pinkBall: 0,
    yellowBall: 0,
    orangeBall: 0,
    lightBlueBall: 0,
    greenBall: 0,
  });

  const [price, setPrice] = useState(100);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);

  function checkCanOrder(toys) {
    const total = Object.keys(toys).reduce((total, toy) => {
      return total + toys[toy];
    }, 0);
    setCanOrder(total > 0);
  }

  function startOrder() {
    setIsOrdering(true);
  }

  function addToy(type) {
    const newToys = { ...toys };
    newToys[type]++;
    setToys(newToys);
    checkCanOrder(newToys);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeToy(type) {
    if (toys[type] >= 1) {
      const newToys = { ...toys };
      newToys[type]--;
      setToys(newToys);
      checkCanOrder(newToys);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  return (
    <div className={classes.ChristmasTree}>
      <ToysKit price={price} toys={toys} />
      <ToysControls
        startOrder={startOrder}
        canOrder={canOrder}
        toys={toys}
        addToy={addToy}
        removeToy={removeToy}
      />
      <Modal show={isOrdering}>
        <OrderSummary toys={toys} />
      </Modal>
    </div>
  );
};
