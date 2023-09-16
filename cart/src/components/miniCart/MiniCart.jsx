import React, { useEffect, useState } from "react";

import { cart, clearCart } from "../../cart";
import { currency } from "home/products";

import styles from "./miniCart.module.scss";

export default function MiniCart() {
  const [items, setItems] = useState(undefined);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    return cart.subscribe((c) => {
      setItems(c?.cartItems);
    });
  }, []);

  if (!items) return null;

  return (
    <>
      <span onClick={() => setShowCart(!showCart)} id="showcart_span">
        <i
          class="ri-shopping-cart-2-fill"
          style={{ "font-size": "1.5rem" }}
          id="showcart"
        ></i>
        {items.length}
      </span>
      {showCart && (
        <>
          <div className={styles.cartContainer}>
            <div className={styles.cart}>
              {items.map((item) => (
                <React.Fragment key={item.id}>
                  <div>{item.quantity}</div>
                  <img src={item.image} alt={item.name} className="max-h-6" />
                  <div>{item.name}</div>
                  <div className={styles.itemRight}>
                    {currency.format(item.quantity * item.price)}
                  </div>
                </React.Fragment>
              ))}
              <div></div>
              <div></div>
              <div></div>
              <div>
                {currency.format(
                  items.reduce((a, v) => a + v.quantity * v.price, 0)
                )}
              </div>
            </div>
            <div className={styles.cartFooter}>
              <button
                id="clearcart"
                className={styles.clearCart}
                onClick={clearCart}
              >
                Clear Cart
              </button>

              <button className={styles.checkout} onClick={clearCart}>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
