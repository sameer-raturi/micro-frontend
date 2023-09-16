import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { addToCart, useLoggedIn } from "cart/cart";

import { currency, getProducts } from "../../products";

import styles from "./homeContent.module.scss";

function HomeContent() {
  const [products, setProducts] = useState([]);
  const loggedIn = useLoggedIn();

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className={styles.homeContent}>
      {products.map((product) => (
        <div className={styles.product} key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img
              style={{ height: "150px", width: "150px" }}
              src={product.image}
              alt={product.name}
            />
          </Link>
          <div className={styles.productDetails}>
            <div className={styles.productName}>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </div>
            <div className={styles.productPrice}>
              {currency.format(product.price)}
            </div>
          </div>
          <div className={styles.productDescription}>{product.description}</div>
          {loggedIn && (
            <button
              className={styles.addToCart}
              onClick={() => addToCart(product.id)}
              id={`addToCart_${product.id}`}
            >
              Add To Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default HomeContent;
