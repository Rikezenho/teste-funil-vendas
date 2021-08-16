import { useContext } from "react";
import { store } from "../../store";
import { cartRemove } from "../../store/cart.actions";
import "./styles.css";

export const CartItem = (props) => {
  const { sku, name, price, qty } = props;
  const { dispatch } = useContext(store);

  const removeFromCart = () => {
    dispatch(cartRemove(sku));
  };

  return (
    <div className="cart-item">
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Qty: {qty}</p>
      <button
        className="remove-from-cart"
        data-price={price}
        data-name={name}
        data-sku={sku}
        onClick={removeFromCart}
      >
        Remove from cart
      </button>
    </div>
  );
};
