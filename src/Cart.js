import ProductContext from "./ProductContext";
import { useContext } from "react";
import {Link} from "react-router-dom";

function Cart() {
  const {cart, add, remove}  = useContext(ProductContext);

  const cartKeys = Object.keys(cart);
  const cartItems = Object.values(cart);


  let totalPrice = 0;
  if (cartItems.length) {
    totalPrice = cartItems.reduce( (acc, item) => {return acc + item.price*item.count}, 0 );
  }

  return (
    <div>
      <Link to="/" >Home</Link>
      <h1>Cart:</h1>
      {cartKeys.map( key =>  (
          <div key={cart[key].name}>
            <h3>Item Name: {cart[key].name}</h3>
            <h3>Description {cart[key].description}</h3>
            <img src={cart[key].image_url} height="100px" width="100px"  alt={cart[key].name}/>
            <h3>Price: {cart[key].price} </h3>
            <div>
            <h3>Count: {cart[key].count}</h3>
            <button onClick={()=> add(key)}>+</button>
            <button onClick={()=> remove(key)}>-</button>
            </div>
          </div>)
        )
      }
      <p>Subtotal: {totalPrice} </p>

    </div>
  )
}

export default Cart;