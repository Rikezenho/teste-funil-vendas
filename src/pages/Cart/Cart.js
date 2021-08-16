import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartItem } from "../../components/CartItem/CartItem";
import { store } from "../../store";

export const Cart = () => {
  const { state } = useContext(store);
  const history = useHistory();

  const items = Object.values(state.cart);

  const purchase = () => {
    const orderId = Math.floor(Math.random() * 10000000);
    history.push(`/purchase/${orderId}`, state.cart);
  };

  return (
    <main>
      <h1>Cart</h1>
      {items.length ? (
        <>
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
