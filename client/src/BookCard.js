import React from "react";
import bookAPI from "./utils/API"

const BookCard = (props) => {
 function saveBook(data) {
    bookAPI.saveBook(data)
  }
  return (
    <div className="card-container">
        <img src={props.image} alt="" />
        <div className="desc">
          <button onClick={() => saveBook(props)} type="button" className="btn btn-info">Save</button>
  <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.description}</p>
            <p>{props.link}</p>

        </div>
    </div>
  );
};

export default BookCard;
