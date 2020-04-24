import React, { Component } from "react";
import API from "../utils/API"
import Header from "../Header";
import Books from "../Books";
import BookCard from "../BookCard"
import "../App.css";

class Saved extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.savedBooks()
      .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <BookCard books={this.state.savedBooks} />
      </div>
    );
  }
}

export default Saved;
