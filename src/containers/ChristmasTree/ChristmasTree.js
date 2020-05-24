import React, { useState } from "react";
import Tree from "../../components/ChristmasTree/Tree/Tree";
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

  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();

  const canOrder = Object.values(toys).reduce((canOrder, number) => {
    return !canOrder ? number > 0 : canOrder;
  }, false);

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

  /*useEffect(() => {
    axios.get("/toys.json").then((response) => setToys(response.data));
  }, []);*/

  let output = <Spinner />;
  if (toys) {
    output = (
      <>
        <Tree price={price} toys={toys} />
        <ToysControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          toys={toys}
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
        cancelOrder={() => setIsOrdering(false)}
        price={price}
      />
    );
  }

  return (
    <div className={classes.ChristmasTree}>
      {output}
      <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
