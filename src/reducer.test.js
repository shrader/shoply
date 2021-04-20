import reducer from "./reducer";
const initialProducts = {products:
                          {test:{name:"test"}, test2:{name:"test2"}}
                        }
let initialState

beforeEach(function() {
  initialState = {cart:{},
                      products: initialProducts}
});

it("Add Item properly", function() {
  let action = {type:"ADD_PRODUCT", id:"test"};
  expect(reducer(initialState, action)).toEqual({products:initialProducts, cart:{test:{name:"test", count:1}}});
})

it("Add Existing Item properly", function() {
  let action = {type:"ADD_PRODUCT", id:"test"};
  let addedState = reducer(initialState, action);
  expect(reducer(addedState, action)).toEqual({products:initialProducts, cart:{test:{name:"test",count:2}}});

})

it("Removes Item properly", function() {
  let add = {type:"ADD_PRODUCT", id:"test"};
  let addedState = reducer(initialState, add);
  let remove = {type:"REMOVE_PRODUCT", id:"test"};
  expect(reducer(addedState,remove)).toEqual({products:initialProducts, cart:{}});
})

it("Decrements Count if Existing", function() {
  let add = {type:"ADD_PRODUCT", id:"test"};
  let addedState = reducer(initialState, add);
  let addedTwiceState = reducer(addedState, add);
  let remove = {type:"REMOVE_PRODUCT", id:"test"};
  expect(reducer(addedTwiceState,remove)).toEqual({products:initialProducts, cart:{test:{name:"test", count:1}}});
})

it("Handles invalid type", function() {
  let action = {type:"blah"};
  expect(() => reducer({},action)).toThrow();
})