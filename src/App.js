import React, { Component } from "react";
import axios from "axios";
import Interface from "./components/Interface";
import { connect } from "react-redux";
import { UPDATE_PRODUCTS } from "./redux/types";
import "./App.css";

class App extends Component {
  async componentDidMount() {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");
      this.props.dispatch({ type: UPDATE_PRODUCTS, payload: result.data });
    } catch (error) {
      console.log("API Error!", error);
    }
  }

  render() {
    const { products } = this.props;

    if (products) {
      return <Interface products={products} />;
    }

    return <p>Loading...</p>;
  }
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps)(App);
