// this is a products library

const API_SERVER = "http://localhost:8080";

export const getProducts = () =>
  fetch(`${API_SERVER}/products`).then((res) => res.json());

export const getProductById = (id) => {
  console.log("sixer");
  return fetch(`${API_SERVER}/products/${id}`).then((res) => {
    // console.log({ res: res.json() });
    return res.json();
  });
};

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
