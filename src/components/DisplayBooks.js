import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RetrieveBook } from '../redux/Books/book';
import AddBook from './AddBook';
import Book from './Book';

const DisplayBooks = () => {
  const bookItem = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RetrieveBook());
    }, [dispatch]);
  
  return (
    <div className="book-container">
      {bookItem.map((item) => (
        <Book key={item.id} id={item.id} title={item.title} author={item.author}  category={item.category}/>
      ))}
      
      <AddBook />
    </div>
  );
}
  
export default DisplayBooks;
