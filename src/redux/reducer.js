import { initialState } from "./store";
import {
  UPDATE_CART,
  UPDATE_PRODUCTS,
  CHANGE_SCREEN,
  UPDATE_SEARCHTERM,
} from "./types";

export function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case UPDATE_CART:
      const shoppingCartItems = [...state.shoppingCartItems];

      const indexOfCartItem = shoppingCartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (indexOfCartItem > -1) {
        shoppingCartItems[indexOfCartItem].quantity =
          action.payload.qty === -1
            ? 0
            : shoppingCartItems[indexOfCartItem].quantity + action.payload.qty; //SUPER SORRY Toby :) Russel cleared it!!!!!
      } else {
        shoppingCartItems.push({ quantity: 1, id: action.payload.id });
      }

      return { ...state, shoppingCartItems };

    case UPDATE_PRODUCTS:
      return { ...state, products: action.payload };
    case CHANGE_SCREEN:
      return { ...state, screen: state.screen === 0 ? 1 : 0 };
    case UPDATE_SEARCHTERM:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
