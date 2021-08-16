import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CartItem } from "../../components/CartItem/CartItem";
import { store } from "../../store";
import { cartClear } from "../../store/cart.actions";
import { pushToDataLayer } from "../../utils/dataLayer";
import { CART, CLEAR_CART } from "../../utils/events";

export const Cart = () => {
  const { state, dispatch } = useContext(store);
  const history = useHistory();

  const items = Object.values(state.cart);

  const purchase = () => {
    const orderId = Math.floor(Math.random() * 10000000);
    history.push(`/purchase/${orderId}`, state.cart);
  };

  const clearCart = () => {
    pushToDataLayer(CLEAR_CART);
    dispatch(cartClear());
  };

  useEffect(() => {
    pushToDataLayer(CART, state.cart);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main>
      <h1>Cart</h1>
      {items.length ? (
        <>
          <button onClick={clearCart}>Clear cart</button>
          <div className="cart-items">
            {items.map((cartItem) => (
              <CartItem key={cartItem.sku} {...cartItem} />
            ))}
          </div>
          <button className="purchase" onClick={purchase}>
            Purchase
          </button>
        </>
      ) : (
        "Cart is empty."
      )}
    </main>
  );
};
