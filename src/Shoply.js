import {useReducer} from "react";
import reducer from "./reducer";
import products from "./data.json";
import ProductContext from "./ProductContext";
import DispatchContext from "./DispatchContext";
import ProductList from "./ProductList";
import CartOverview from "./CartOverview";


function Shoply (){

  const initialState = {products, cart:{}};
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
        <ProductContext.Provider value={{cart:state.cart, products: state.products}}>
          <CartOverview />
          <ProductList />
        </ProductContext.Provider>
      </DispatchContext.Provider>
    </div>
  );

}

export default Shoply;