import React, { useEffect, useState } from "react";
import { login, jwt } from "../../cart";

const CartContent = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    login("sameer", "47");
    // jwt.subscribe returns an unsubscribe method which will run automatically on unmount
    return jwt.subscribe((val) => setToken(val ?? ""));
  }, []);
  return <div>JWT: {token}</div>;
};

export default CartContent;
