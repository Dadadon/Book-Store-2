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
    <div className='container mt-5 pb-5'>
      <div class="Line"></div>
    <h5 className='text-muted fw-bold'>Add New Book</h5>
      <form onSubmit={handleSubmit} className="d-flex justify-content-between ">
        <input
        className='w-50 p-2 text-muted'
          id="bookName"
          type="text"
          name="title"
          required
          placeholder="Book Name"
        />
        <input
        className='w-25 p-2 text-muted'
          id="author"
          type="text"
          name="author"
          required
          placeholder="Author"
        />
        <button type="submit" className='btn btn-sm btn-primary' >Add Book</button>
      </form>
    </div>
  );
}
export default AddBook;
