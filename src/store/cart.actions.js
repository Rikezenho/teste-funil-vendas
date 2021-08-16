const cartAdd = (product) => ({
  type: "addProduct",
  payload: product,
});

const cartRemove = (sku) => ({
  type: "removeProduct",
  payload: sku,
});

const cartClear = () => ({
  type: "clearCart",
});

export { cartAdd, cartRemove, cartClear };
