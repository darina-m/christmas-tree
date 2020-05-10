import React, { useState, useEffect } from "react";
import ToysKit from "../../components/ChristmasTree/Tree/Tree";
import ToysControls from "../../components/ChristmasTree/ToysControls/ToysControls";
import Modal from "../../components/UI/Modal/Modal";
import classes from "./ChristmasTree.module.css";
import OrderSummary from "../../components/ChristmasTree/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const PRICES = {
  blueBall: 7,
  pinkBall: 9,
  yellowBall: 10,
  orangeBall: 8,
  lightBlueBall: 12,
  greenBall: 8,
};

export default withErrorHandler(() => {
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
  const [loading, setLoading] = useState(false);

  function checkCanOrder(toys) {
    const total = Object.keys(toys).reduce((total, toy) => {
      return total + toys[toy];
    }, 0);
    setCanOrder(total > 0);
  }

  function startOrder() {
    setIsOrdering(true);
  }

  function cancelOrder() {
    setIsOrdering(false);
  }

  function finishOrder() {
    const order = {
      toys: toys,
      price: price,
      delivery: "Fast",
      customer: {
        name: "Bakyt",
        phone: "0700700700",
        address: {
          street: "123 Gebze",
          city: "Karakol",
        },
      },
    };

    setLoading(true);
    axios.post("/orders.json", order).then((response) => {
      setLoading(false);
      setIsOrdering(false);
    });
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
  let orderSummary = <Spinner />;
  if (!loading && isOrdering) {
    orderSummary = (
      <OrderSummary
        toys={toys}
        finishOrder={finishOrder}
        cancelOrder={cancelOrder}
        price={price}
      />
    );
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
      <Modal show={isOrdering} hideCallback={cancelOrder}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
