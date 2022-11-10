const ADD_BOOK = 'BOOK-STORE/books/ADD_BOOK';
const DELETE_BOOK = 'BOOK-STORE/books/DELETE_BOOK';

const InitialState = [];

// add handleBook reducers
const handleBookReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.book,
      ];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.bookId);
    default: return state;
  }
};

// Add book
const AddBook = (book) => ({
  type: ADD_BOOK,
  book,
});

// Delete Book
const DeleteBook = (bookId) => ({
  type: DELETE_BOOK,
  bookId,
});

export { handleBookReducer, DeleteBook, AddBook };
