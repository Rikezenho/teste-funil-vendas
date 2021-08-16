import { useContext, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { store } from "../../store";
import { cartClear } from "../../store/cart.actions";
import "./styles.css";

export const Purchase = () => {
  const { orderId } = useParams();
  const { dispatch } = useContext(store);
  const location = useLocation();

  useEffect(() => {
    dispatch(cartClear());
  }, [dispatch]);

  return (
    <main>
      <h1>Purchase completed!</h1>
      <p>Your orderId is: {orderId}</p>

      <h2>Products:</h2>
      <div className="receipt-list">
        {Object.values(location.state).map(({ sku, name, price, qty }) => (
          <div className="receipt-item" key={sku}>
            <h3>{name}</h3>
            <p>
              Qty: {qty} | Price: {price}
            </p>
          </div>
        ))}
      </div>

      <Link to="/">Back to home</Link>
    </main>
  );
};
