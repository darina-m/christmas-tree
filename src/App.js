import React from "react";
import "./App.css";
import Layout from "./containers/Layout/Layout.js";
import ChristmasTree from "./containers/ChristmasTree/ChristmasTree";
import Checkout from "./containers/Checkout/Checkout";

export default () => {
  return (
    <div className="App">
      <Layout>
        <ChristmasTree />
        <Checkout/>
      </Layout>
    </div>
  );
};
