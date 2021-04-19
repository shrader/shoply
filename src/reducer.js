import products from "./data.json";

const initialState = {products, cart:[]};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return {
        ...state,
        cart: [
          ...state.cart, action.id
        ]
      };
    }
    case "REMOVE_PRODUCT": {
      return {
        ...state,
        cart: state.cart
                .filter(p => p.id !== action.id)
      };
    }

      default:
        throw new Error(`Unexpected action type: ${action.type}`);
    }
}

export default reducer;