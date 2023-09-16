import React from "react";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

import styles from "./header.module.scss";

function Header(props) {
  return (
    <div className={styles.header}>
      <div >Fidget Spinner World</div>
      <div>
        <MiniCart />
        <Login />
      </div>
    </div>
  );
}

export default Header;
