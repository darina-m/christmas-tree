import React from "react";
import Layout from "./containers/Layout/Layout.js";
import ChristmasTree from "./containers/ChristmasTree/ChristmasTree";
import "./App.css";

export default () => {
  return (
    <div className="App">
      <Layout>
        <ChristmasTree />
      </Layout>
    </div>
  );
};
