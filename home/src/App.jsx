import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <div>Hey Yo!<br /> whats up <br />whats up<br /> whats up<br /></div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
