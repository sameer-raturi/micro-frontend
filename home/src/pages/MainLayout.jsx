import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "remixicon/fonts/remixicon.css";

import Header from "home/Header";
import Footer from "home/Footer";
import PdpContent from "pdp/PdpContent";
import HomeContent from "../components/home";
import CartContent from "cart/CartContent";

import styles from './mainLayout.module.scss';

export default function MainLayout() {
  return (
    <Router>
      <div className={styles.container}>
        <Header />
        <>
          <Switch>
            <Route exact path="/" component={HomeContent} />
            <Route path="/product/:id" component={PdpContent} />
            <Route path="/cart" component={CartContent} />
          </Switch>
        </>
        <Footer />
      </div>
    </Router>
  );
}