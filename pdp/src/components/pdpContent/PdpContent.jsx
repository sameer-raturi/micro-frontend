import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { getProductById, currency } from "home/products";
import placeAddToCart from "addToCart/placeAddToCart";
import styles from "./pdpContent.module.scss";

export default function PdpContent() {
  const { id } = useParams();
  // const id = 1;
  const [product, setProduct] = useState(null);
  console.log({ product, id });
  useEffect(() => {
    if (id) {
      getProductById(id)
        .then((props) => {
          console.log({ props });
          setProduct(props);
        })
        .catch((err) => console.log({ err }));
    } else {
      setProduct(null);
    }
  }, [id]);

  const addToCart = useRef(null);

  useEffect(() => {
    if (addToCart.current) {
      placeAddToCart(addToCart.current, product.id);
    }
  }, [product]);

  if (!product) return null;

  return (
    <div className={styles.pdpContent}>
      <div>
        <img
          style={{ height: "250px", width: "250px" }}
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className={styles.productDetails}>
        <h1 className={styles.productName}>{product.name}</h1>
        <div className={styles.productPrice}>
          {currency.format(product.price)}
        </div>
      </div>
      <div ref={addToCart}></div>
      <div className={styles.productDescription}>{product.description}</div>
      <div className={styles.productLongDescription}>
        {product.longDescription}
      </div>
    </div>
  );
}
