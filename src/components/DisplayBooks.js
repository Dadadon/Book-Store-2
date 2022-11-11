import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

const DisplayBooks = () => {
  const bookItem = useSelector((state) => state.book);
  return (
    <div className="book-container">
      {bookItem.map((item) => (
        <Book key={item.id} id={item.id} title={item.title} author={item.author} />
      ))}
      <AddBook />
    </div>
  );
}
  
export default DisplayBooks;
