import React, { Component } from "react";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";
import { connect } from "react-redux";
import { CHANGE_SCREEN, UPDATE_SEARCHTERM } from "../redux/types";

class Interface extends Component {
  render() {
    const { products, screen, filter } = this.props;

    //what products do I want to keep?
    const filtered = [...products].filter((product) => {
      //work out if the product matches the search term
      return product.title.toLowerCase().includes(filter.toLowerCase());
    });

    const results = filtered.length > 0 ? filtered : products;

    return screen === 0 ? (
      <>
        <button onClick={() => this.props.dispatch({ type: CHANGE_SCREEN })}>
          View shopping cart
        </button>

        <input
          type="text"
          onInput={(e) => {
            this.props.dispatch({
              type: UPDATE_SEARCHTERM,
              payload: e.target.value,
            });
          }}
        />

        {results.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </>
    ) : (
      <ShoppingCart products={products} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    screen: state.screen,
    filter: state.filter,
  };
};

export default connect(mapStateToProps)(Interface);
