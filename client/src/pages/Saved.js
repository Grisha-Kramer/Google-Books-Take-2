import React, { Component } from "react";
import API from "../../routes/api"
import Header from "../Header";
import Books from "../Books";
import BookCard from "../BookCard"
import "../App.css";

class Saved extends Component {
    state = {
        savedBooks: [],
    }


  render() {
    return (
      <div className="App">
        <Header />
        <Books />
      </div>
    );
  }
}

export default Saved;
