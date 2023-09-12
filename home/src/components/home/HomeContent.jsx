import React, { useEffect, useState } from "react";

import { getProducts } from "../../products";

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
        </div>
      ))}
    </div>
  );
}

export default HomeContent;
