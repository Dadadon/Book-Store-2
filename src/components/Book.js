import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Book = (item) => {
  const { title, author } = item;
  return (
    <div className="d-flex">
      {" "}
      <h2>{title}</h2>
      <h2>{author}</h2>
    </div>
  );
};
export default Book;
