import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { DeleteBook } from "../redux/Books/book";
import { CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

const Book = (item) => {
  const { id, title, author, category } = item;
  const dispatch = useDispatch();
  const deleteBook = () => {
    dispatch(DeleteBook(id));
  };
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);
  return (
    <div className="d-flex mt-3 container bg-white pt-3 pb-3">
      <div className="d-grid w-50 ps-5">
        {" "}
        <p className="text-muted fw-bold">{category}</p>
        <h2 className="mb-0">{title}</h2>
        <p className="text-primary">{author}</p>
        <div className="d-flex gap-3">
          <a href="##" className="text-primary nav-link">Comments</a>
          <p className="text-muted">|</p>
          <a href="##" className="text-primary nav-link" onClick={deleteBook}>Remove</a>
          <p className="text-muted">|</p>
          <a href="##" className="text-primary nav-link">Edit</a>
        </div>
      </div>
      <div className="w-25 d-flex mt-4">
        {" "}
        <div style={{ width: 75, marginLeft: 20 }}>
          <CircularProgressbar value={percentage} />
        </div>
        <div className="mt-3 ms-2">
          <p className="mb-0">{`${percentage}%`}</p>
          <p className="text-muted">Completed</p>
        </div>
        <div class="Line-2"></div>
      </div>
      <div className="w-25 mt-4">
        <h5 className="text-muted">Current Chapter</h5>
        <h5>Chapter 1</h5>
        <button className="btn btn-sm btn-primary w-50">Update Progress</button>
      </div>
    </div>
  );
};
export default Book;
