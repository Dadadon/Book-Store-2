import React from "react";
import { useDispatch, useSelector } from "react-redux";
import checkStatus from "../redux/Categories/categories";

const Categories = () => {
  const bookStatus = useSelector((state) => state.status);
  const dispatch = useDispatch;
  const displayStatus = () => {
    dispatch(checkStatus());
  }
  return (
    <>
     <p>
        {bookStatus}
      </p>
      <div>
        <button onClick={() => displayStatus()} type="button">Check Status</button>
      </div>
    </>
  );
}
export default Categories;
