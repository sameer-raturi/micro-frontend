import React, { useEffect, useState } from "react";

import { currency, getProducts } from "../../products";

import styles from "./homeContent.module.scss";

function HomeContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className={styles.homeContent}>
      {products.map((product) => (
        <div className={styles.product}>
          <img
            style={{ height: "150px", width: "150px" }}
            src={product.image}
            alt={product.name}
          />
          <div className={styles.productDetails}>
            <div className={styles.productName}>
            {product.name}
            </div>
            <div className={styles.productPrice}>
            {currency.format(product.price)}
            </div>
          </div>
          <div className={styles.productDescription}>
            {product.description}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeContent;
