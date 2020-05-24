import React, { useState, useEffect } from "react";
import ToysKit from "../../components/ChristmasTree/Tree/Tree";
import ToysControls from "../../components/ChristmasTree/ToysControls/ToysControls";
import Modal from "../../components/UI/Modal/Modal";
import classes from "./ChristmasTree.module.css";
import OrderSummary from "../../components/ChristmasTree/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default withErrorHandler(() => {
  const { toys, price } = useSelector((state) => state);

  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();

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
    const queryParms = Object.keys(toys).map(
      (toy) => encodeURIComponent(toy) + "=" + encodeURIComponent(toys[toy])
    );
    queryParms.push("price=" + encodeURIComponent(price));

    history.push({
      pathname: "./checkout",
      search: queryParms.join("&"),
    });
  }

  function addToy(type) {
    const newToys = { ...toys };
    newToys[type]++;
    //setToys(newToys);
    checkCanOrder(newToys);

    // const newPrice = price + PRICES[type];
    //setPrice(newPrice);
  }

  function removeToy(type) {
    if (toys[type] >= 1) {
      const newToys = { ...toys };
      newToys[type]--;
      // setToys(newToys);
      checkCanOrder(newToys);

      // const newPrice = price - PRICES[type];
      // setPrice(newPrice);
    }
  }

  /*useEffect(() => {
    axios.get("/toys.json").then((response) => setToys(response.data));
  }, []);*/

  let output = <Spinner />;
  if (toys) {
    output = (
      <>
        <ToysKit price={price} toys={toys} />
        <ToysControls
          startOrder={startOrder}
          canOrder={canOrder}
          toys={toys}
          addToy={addToy}
          removeToy={removeToy}
        />
      </>
    );
  }

  let orderSummary = <Spinner />;
  if (isOrdering) {
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
      {output}
      <Modal show={isOrdering} hideCallback={cancelOrder}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
