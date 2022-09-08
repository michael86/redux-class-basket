import React, { Component } from "react";
import axios from "axios";
import Interface from "./components/Interface";
import "./App.css";

class App extends Component {
  state = { shoppingCartItems: [] };

  async componentDidMount() {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");

      this.setState({ products: result.data });
    } catch (error) {
      console.log("API Error!");
    }
  }

  onDeleteCartItem = (id) => {
    const shoppingCartItems = [...this.state.shoppingCartItems];

    const indexOfCartItem = shoppingCartItems.findIndex(
      (item) => item.id === id
    );

    shoppingCartItems.splice(indexOfCartItem, 1);

    console.log("<><><>", shoppingCartItems);

    this.setState({ shoppingCartItems });
  };

  onBuyNow = (id) => {
    const shoppingCartItems = [...this.state.shoppingCartItems];

    const indexOfCartItem = shoppingCartItems.findIndex(
      (item) => item.id === id
    );

    if (indexOfCartItem > -1) {
      shoppingCartItems[indexOfCartItem].quantity += 1;
    } else {
      shoppingCartItems.push({ quantity: 1, id });
    }

    this.setState({ shoppingCartItems });
  };

  render() {
    const { products, shoppingCartItems } = this.state;

    if (products) {
      return (
        <Interface
          onBuyNow={this.onBuyNow}
          products={products}
          shoppingCartItems={shoppingCartItems}
          onDeleteCartItem={this.onDeleteCartItem}
        />
      );
    }

    return <p>Loading...</p>;
  }
}

export default App;
