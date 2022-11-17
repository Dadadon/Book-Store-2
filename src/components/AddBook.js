import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/Books/book';

const AddBook = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    // 👇️ prevent page refresh
    event.preventDefault();
    const {bookName, author} = event.target.elements
    console.log(bookName.value, author.value);
    if (author.value !== '' && bookName.value !== ''){
      dispatch(addBook(uuidv4(),bookName.value, author.value))
    }
    bookName.value= '';
    author.value='';
    console.log('Book; submitted ✅');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="bookName"
          type="text"
          name="title"
          required
          placeholder="Book Name"
        />
        <input
          id="author"
          type="text"
          name="author"
          required
          placeholder="Author"
        />
        <button type="submit" >Add Book</button>
      </form>
    </>
  );
}
export default AddBook;
