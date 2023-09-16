import React, { useEffect, useState } from "react";
import { login, jwt } from "../../cart";
import Login from "../login/Login";

const CartContent = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    // login("sameer", "47");
    // jwt.subscribe returns an unsubscribe method which will run automatically on unmount
    // here we have subscribe to this jwt whenever it recieves the value this will be
    // automatically set inside our token and ui will get render again because of the state
    return jwt.subscribe((val) => setToken(val ?? ""));
  }, []);
  return (
    <div>
      <Login />
      JWT: {token}
    </div>
  );
};

export default CartContent;
