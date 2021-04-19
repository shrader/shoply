import ProductContext from "./ProductContext";


function ProductCard({add, remove, product, inCart}) {

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <img src={product.image_url} height="100px" width="100px" alt={product.name}/>
      <br></br>
      <button onClick={add}>Add to cart</button>
      {inCart? <button onClick={remove}>Remove from cart</button>: null}
    </div>
  )
}

export default ProductCard;