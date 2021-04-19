import ProductContext from "./ProductContext";


function ProductCard({add, remove, product, inCart}) {

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <img src={product.img_url} />
      <button onClick={add}>Add to cart</button>
      {inCart? <button onClick={remove}>X</button>: null}
    </div>
  )
}

export default ProductCard;