import { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../../store";
import "./styles.css";

export const Nav = () => {
  const { state } = useContext(store);
  const cartCount = Object.keys(state.cart).length;
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/category/shoes">
            Shoes
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/category/shirts">
            Shirts
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/cart">
            Go to cart ({cartCount})
          </Link>
        </li>
      </ul>
    </nav>
  );
};
