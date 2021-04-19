

function reducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      let cartCopy = {...state.cart};
      if (cartCopy[action.id]) {
        cartCopy[action.id] = {...cartCopy[action.id], count:cartCopy[action.id].count +1}
      } else {
        cartCopy[action.id] = state.products.products[action.id];
        cartCopy[action.id].count = 1;
      }
      return {
        ...state,
        cart: cartCopy
      };
    }
    case "REMOVE_PRODUCT": {
      let cartCopy = {...state.cart};
      cartCopy[action.id] = {...cartCopy[action.id], count: cartCopy[action.id].count -1};
      if (cartCopy[action.id].count === 0) {
        delete cartCopy[action.id];
      }

      return {
        ...state,
        cart: cartCopy
      };
    }

      default:
        throw new Error(`Unexpected action type: ${action.type}`);
    }
}

export default reducer;