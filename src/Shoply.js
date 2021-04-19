import {useReducer} from "react";
import reducer from "./reducer";
import products from "./data.json";
import ProductContext from "./ProductContext";
import DispatchContext from "./DispatchContext";
import ProductList from "./ProductList";
import CartOverview from "./CartOverview";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";


function Shoply (){

  const initialState = {products, cart:{}};
  const [state, dispatch] = useReducer(reducer, initialState);

  //could add to useCallback
  //can also add to dispatch provider
  function add(id) {
    dispatch({type: "ADD_PRODUCT", id});
  }

  function remove(id)  {
    dispatch({type: "REMOVE_PRODUCT", id});
  }



  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
        <ProductContext.Provider value={{cart:state.cart, products: state.products, add, remove}}>
          <BrowserRouter>
          <Routes />
          </BrowserRouter>
        </ProductContext.Provider>
      </DispatchContext.Provider>
    </div>
  );

}

export default Shoply;