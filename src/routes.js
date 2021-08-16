import { Route, Switch } from "react-router-dom";
import { Category } from "./pages/Category";
import { Home } from "./pages/Home";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/category/:category">
      <Category />
    </Route>
  </Switch>
);

export { Routes };
