import React, { Component } from "react";
import Details from "./Product/Details";
import Pricing from "./Product/Pricing";
import Rating from "./Product/Rating";
import Image from "./Product/Image";
import Buttons from "./Product/Buttons";

import { connect } from "react-redux";
import { UPDATE_CART } from "../redux/types";

class Product extends Component {
  render() {
    const { id, title, price, description, rating, image } = this.props.product;

    return (
      <div className="product">
        <div>
          <Details title={title} description={description} image={image} />
        </div>
        <div>
          <Pricing price={price} />
          <Rating rating={rating} />
          <Image title={title} image={image} />
          <Buttons
            id={id}
            onBuyNow={() => {
              this.props.dispatch({
                type: UPDATE_CART,
                payload: { id, qty: 1 },
              });
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoppingCartItems: state.shoppingCartItems,
  };
};

export default connect(mapStateToProps)(Product);
