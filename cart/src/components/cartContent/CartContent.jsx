import React, { useState, useEffect } from "react";

import { cart, clearCart } from "cart/cart";
import { currency } from "home/products";

import styles from "./cartContent.module.scss";

export default function CartContent() {
  const [items, setItems] = useState([]);

  useEffect(
    () => cart.subscribe((value) => setItems(value?.cartItems ?? [])),
    []
  );

  return (
    <div>
      <div className={styles.cart}>
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <div>{item.quantity}</div>
            <img src={item.image} alt={item.name} className={styles.image} />
            <div>{item.name}</div>
            <div className={styles.itemPrice}>
              {currency.format(item.quantity * item.price)}
            </div>
          </React.Fragment>
        ))}
      </div>
      {items.length > 0 && (
        <div>
          <div className={styles.itemPrice} id="grand_total">
            {currency.format(
              items.reduce((a, v) => a + v.quantity * v.price, 0)
            )}
          </div>
          <div className={styles.cartFooter}>
            <button
              id="clearcart"
              className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
              onClick={clearCart}
            >
              Clear Cart
            </button>

            <button
              className="bg-green-900 text-white py-2 px-5 rounded-md text-sm"
              onClick={clearCart}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
