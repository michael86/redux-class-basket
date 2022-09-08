import React, { Component } from "react";

class ShoppingCartItem extends Component {
  render() {
    console.log(this.props.item);
    return (
      <>
        <p>{this.props.item.details.title}</p>
        <button onClick={() => this.props.onDeleteCartItem(this.props.item.id)}>
          Delete
        </button>
      </>
    );
  }
}

export default ShoppingCartItem;
