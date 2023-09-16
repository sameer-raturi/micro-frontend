import { createEffect, createSignal, Show } from "solid-js";

import { jwt, addToCart } from "cart/cart";

const AddToCart = ({ id }) => {
  const [loggedIn, setLoggedIn] = createSignal(false);
  createEffect(() => {
    return jwt.subscribe((jwt) => setLoggedIn(!!jwt));
  });

  return (
    <Show when={loggedIn()}>
      <button onClick={() => addToCart(id)}>Add To Cart</button>
    </Show>
  );
};

export default AddToCart;
