import React, { Component } from "react";
import Header from "../Header";
import Books from "../Books";
import "../App.css";

class Search extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Books />
      </div>
    );
  }
}

export default Search;
