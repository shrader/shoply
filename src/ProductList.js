import {useContext} from "react";
import ProductCard from "./ProductCard";
import ProductContext from "./ProductContext";
import CartOverview from "./CartOverview";
import {Link} from "react-router-dom";

function ProductList() {
  const {add, remove, cart, products} = useContext(ProductContext);
  const productKeys = Object.keys(products.products);


  return (
    <div>
      <CartOverview />
      <Link to="/cart" >Go to Cart</Link>
      <h1>Products:</h1>
      <ul>
         {productKeys.map(pkey => {
          return (
          <li key={pkey}>
            <ProductCard product={products.products[pkey]} remove={() => remove(pkey)} add={() => add(pkey)} inCart={!!cart[pkey]}/>
            <Link to={`/products/${pkey}`} >Details</Link>
          </li>
         )})}
      </ul>
    </div>
  )
}

export default ProductList;