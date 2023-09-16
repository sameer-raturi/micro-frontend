import React from "react";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";

import Footer from "home/Footer";
import Header from "home/Header";
import CartContent from "./components/cartContent/CartContent";

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <CartContent />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
