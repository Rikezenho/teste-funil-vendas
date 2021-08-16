import { Route, Switch } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Category } from "./pages/Category";
import { Home } from "./pages/Home";
import { Purchase } from "./pages/Purchase";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/category/:category">
      <Category />
    </Route>
    <Route exact path="/cart">
      <Cart />
    </Route>
    <Route exact path="/purchase/:orderId">
      <Purchase />
    </Route>
  </Switch>
);

export { Routes };
