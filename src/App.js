import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout.js";
import ChristmasTree from "./containers/ChristmasTree/ChristmasTree";

export default () => {
  return (
    <div className="App">
      <Layout>
        <ChristmasTree />
      </Layout>
    </div>
  );
};
