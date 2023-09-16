import React from "react";
import { Link } from "react-router-dom";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

import styles from "./header.module.scss";

function Header(props) {
  return (
    <div className={styles.header}>
      <Link to="/">Fidget Spinner World</Link>
      <div>|</div>
      <Link id="cart" to="/cart">
        Cart
      </Link>
      <div>
        <MiniCart />
        <Login />
      </div>
    </div>
  );
}

export default Header;
