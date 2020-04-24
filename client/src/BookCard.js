import React from "react";

const BookCard = (props) => {
  return (
    <div className="card-container">
        <img src={props.image} alt="" />
        <div className="desc">
          <button type="button" className="btn btn-info">Save</button>
  <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.description}</p>
            <p>{props.link}</p>

        </div>
    </div>
  );
};

export default BookCard;
