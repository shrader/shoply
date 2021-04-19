import { useContext } from "react";
import ProductContext from "./ProductContext"

function CartOverview() {
  const { cart } = useContext(ProductContext);

  const cartItems = Object.values(cart);
  let totalPrice
  if (cartItems.length) {
    totalPrice = cartItems.reduce( (acc, item) => {return acc + item.price*item.count}, 0 );
  } else {
    totalPrice = 0;
  }

  return (
    <div>
      <h1>Cart:</h1>
      {cartItems.map( item =>  (
          <div key={item.name}>
            <h3>Item Name: {item.name}</h3>
            <h3>Price: {item.price} </h3>
            <h3>Count: {item.count}</h3>
          </div>)
        )
      }
      <p>Subtotal: {totalPrice} </p>

    </div>
  )

}

export default CartOverview;