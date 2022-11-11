import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { DeleteBook } from "../redux/Books/book";

const Book = (item) => {
  const { id, title, author } = item;
  const dispatch = useDispatch();
  const deleteBook = () => {
    dispatch(DeleteBook(id));
  };
  return (
    <div className="d-flex">
      {" "}
      <h2>{title}</h2>
      <h2>{author}</h2>
      <button className="btn btn-sm btn-danger" onClick={deleteBook}>Delete Book</button>
    </div>
  );
};
export default Book;
