import React from 'react';
import AddBook from './AddBook';
import Book from './Book';

const BookItem = {
  id: 1,
  title: 'Chronicles of Davian',
  author: 'Davian Beroni',
};

const DisplayBooks = () => (
  <div className="book-container">
    <Book
      title={BookItem.title}
      author={BookItem.author}
    />
    <AddBook />
  </div>
);
export default DisplayBooks;
