import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE_FROM_CART, UPDATE_CART } from "../../redux/types";

class ShoppingCartItem extends Component {
  render() {
    return (
      <>
        <p>{this.props.item.details.title}</p>
        <button
          onClick={() =>
            this.props.dispatch({
              type: UPDATE_CART,
              payload: { id: this.props.item.id, qty: -1 },
            })
          }
        >
          Delete
        </button>
      </>
    );
  }
}

export default connect()(ShoppingCartItem);
