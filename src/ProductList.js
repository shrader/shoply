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
      <h1>Products:</h1>
      <ul>
         {productKeys.map(pkey => {
          return (
          <li key={pkey}>
            <ProductCard product={products.products[pkey]} remove={() => remove(pkey)} add={() => add(pkey)} inCart={!!cart[pkey]}/>
          </li>
         )})}
      </ul>
    </div>
  )
}

export default ProductList;