import React, { Component } from "react";

class Buttons extends Component {
  render() {
    const { id, onBuyNow } = this.props;

    return <button onClick={() => onBuyNow(id)}>Buy Now</button>;
  }
}

export default Buttons;
