import {Redirect, useParams, Link} from "react-router-dom";
import ProductContext from "./ProductContext";
import {useContext} from "react";
import ProductCard from "./ProductCard";


function ProductDetail() {
  const {products, add , remove, cart}  = useContext(ProductContext);
  const {id} = useParams();

  if (products.products[id]){
    return(
      <div id="test">
        <Link to="/" >Home</Link>
        <br></br>
        <Link to="/cart" >Go to Cart</Link>
        <ProductCard product={products.products[id]} remove={() => remove(id)} add={() => add(id)} inCart={!!cart[id]}/>
      </div>
    )
  } 
    
  return (
      <Redirect to="/" />
    )
}

export default ProductDetail;