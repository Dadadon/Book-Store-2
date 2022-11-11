const ADD_BOOK = 'BOOK-STORE/books/ADD_BOOK';
const DELETE_BOOK = 'BOOK-STORE/books/DELETE_BOOK';

const InitialState = [
  {
    id: '1',
    title: 'Book 1',
    author: 'Author',
  },
  {
    id: '2',
    title: 'Book 2',
    author: 'Author 2',
  },
];

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
const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

// Delete Book
const DeleteBook = (bookId) => ({
  type: DELETE_BOOK,
  bookId,
});

export { handleBookReducer, DeleteBook, addBook };
