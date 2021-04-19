import {useContext} from "react";
import ProductCard from "./ProductCard";
import ProductContext from "./ProductContext";
import DispatchContext from "./DispatchContext";

function ProductList() {
  const {cart, products} = useContext(ProductContext);
  const dispatch = useContext(DispatchContext);
  const productKeys = Object.keys(products.products);

  function add(id) {
    dispatch({type: "ADD_PRODUCT", id});
  }

  function remove(id)  {
    dispatch({type: "REMOVE_PRODUCT", id});
  }


  return (
    <div>
      <ul>
         {productKeys.map(p => {
          return (
          <li> 
            <ProductCard key={p} product={products.products[p]} remove={() => remove(p)} add={() => add(p)} inCart={cart.includes(p)}/>
          </li>
         )})}
      </ul>
    </div>
  )
}

export default ProductList;