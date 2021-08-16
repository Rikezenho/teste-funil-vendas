import { useContext } from "react";
import { store } from "../../store";
import { cartAdd } from "../../store/cart.actions";
import { pushToDataLayer } from "../../utils/dataLayer";
import { ADD_TO_CART } from "../../utils/events";

export const ShelfItem = (props) => {
  const { name, price, sku } = props;
  const { dispatch } = useContext(store);

  const addToCart = () => {
    pushToDataLayer(ADD_TO_CART, { name, price, sku, qty: 1 });
    dispatch(cartAdd({ name, price, sku }));
  };

  return (
    <div className="shelf-item">
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <button
        className="add-to-cart"
        data-price={price}
        data-name={name}
        data-sku={sku}
        onClick={addToCart}
      >
        Add to cart
      </button>
    </div>
  );
};
