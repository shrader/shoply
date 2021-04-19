import  {Switch, Route, Redirect} from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";


function Routes() {

  return (
    <Switch>
      <Route exact path="/">
        <ProductList />
      </Route>
      <Route exact path="/products/:id">
        <ProductDetail />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes;