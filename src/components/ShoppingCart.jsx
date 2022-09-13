import React, { Component } from "react";
import { processShoppingCart } from "../utils";
import ShoppingCartItem from "./ShoppingCart/ShoppingCartItem";
import { connect } from "react-redux";
import { CHANGE_SCREEN, UPDATE_CART } from "../redux/types";

class ShoppingCart extends Component {
  onDeleteCartItem = (id) => {
    const shoppingCartItems = [...this.props];

    const indexOfCartItem = shoppingCartItems.findIndex(
      (item) => item.id === id
    );

    shoppingCartItems.splice(indexOfCartItem, 1);

    this.props.dispatch({
      type: UPDATE_CART,
      payload: shoppingCartItems,
    });
  };

  render() {
    const processedCart = processShoppingCart(this.props);
    console.log(this.props);
    return (
      <>
        <button onClick={() => this.props.dispatch({ type: CHANGE_SCREEN })}>
          View products
        </button>
        <h1>£{processedCart.cartTotal.toFixed(2)}</h1>
        {processedCart.shoppingCartItems.map((item) => {
          console.log(item.quantity);
          return (
            item.quantity > 0 && <ShoppingCartItem key={item.id} item={item} />
          );
        })}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    shoppingCartItems: state.shoppingCartItems,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
