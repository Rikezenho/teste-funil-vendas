import { createContext, useReducer } from "react";

const initialState = {
  cart: {},
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "addProduct":
        const product = action.payload;
        return {
          cart: {
            ...state.cart,
            [product.sku]: {
              ...product,
              qty: 1,
            },
          },
        };
      case "removeProduct":
        const sku = action.payload;

        const currentCart = Object.keys(state.cart).reduce((acc, curr) => {
          if (curr !== sku) {
            acc[curr] = state.cart[curr];
          }
          return acc;
        }, {});

        return { cart: currentCart };
      case "clearCart":
        return initialState;
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
