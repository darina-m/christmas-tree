import React, { useState, useEffect } from "react";
import Tree from "../../components/ChristmasTree/Tree/Tree";
import ToysControls from "../../components/ChristmasTree/ToysControls/ToysControls";
import Modal from "../../components/UI/Modal/Modal";
import classes from "./ChristmasTree.module.css";
import OrderSummary from "../../components/ChristmasTree/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { load } from "../../store/actions/builder";

export default withErrorHandler(() => {
  const { toys, price } = useSelector((state) => state);

  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    load(dispatch);
  }, [dispatch]);

  let output = <Spinner />;
  if (toys) {
    const canOrder = Object.values(toys).reduce((canOrder, toy) => {
      return !canOrder ? toy.quantity > 0 : canOrder;
    }, false);
    output = (
      <>
        <Tree price={price} toys={toys} />
        <ToysControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          toys={toys}
        />
        <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
          <OrderSummary
            toys={toys}
            finishOrder={() => history.push("/checkout")}
            cancelOrder={() => setIsOrdering(false)}
            price={price}
          />
        </Modal>
      </>
    );
  }

  return <div className={classes.ChristmasTree}>{output}</div>;
}, axios);
