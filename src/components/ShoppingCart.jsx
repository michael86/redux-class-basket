import React, { Component } from "react";
import { processShoppingCart } from "../utils";
import ShoppingCartItem from "./ShoppingCart/ShoppingCartItem";

class ShoppingCart extends Component {
  render() {
    const processedCart = processShoppingCart(
      this.props.products,
      this.props.shoppingCartItems
    );

    return (
      <>
        <button onClick={() => this.props.onScreenMode(0)}>
          View products
        </button>
        <h1>£{processedCart.cartTotal.toFixed(2)}</h1>
        {processedCart.shoppingCartItems.map((item) => (
          <ShoppingCartItem
            key={item.id}
            item={item}
            onDeleteCartItem={this.props.onDeleteCartItem}
          />
        ))}
      </>
    );
  }
}

export default ShoppingCart;
