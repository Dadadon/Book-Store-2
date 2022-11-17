import axios from 'axios';

const appId = 'yiRWzrbAlFiUPKdrS7aS';
const apiUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`
const ADD_BOOK = 'BOOK-STORE/books/ADD_BOOK';
const DELETE_BOOK = 'BOOK-STORE/books/DELETE_BOOK';
const RETRIEVE_BOOK = 'BOOK-STORE/books/RETRIEVE_BOOK';

const InitialState = [];



// Add book
const addBook = (id, bookName, bookAuthor) => (dispatch) => {
  axios.post(apiUrl, {
      item_id: id,
      title: bookName,
      author: bookAuthor,
      category: 'Sports',
    }).then(() => {
      dispatch({
        type: ADD_BOOK,
        book: {
          id, title: bookName, author: bookAuthor,
        },
      });
    });
};

// Delete Book
const DeleteBook = (bookId) => (dispatch) => {
  axios
    .delete(apiUrl + '/' + bookId)
    .then(() => {
      dispatch({
        type: DELETE_BOOK,
        bookId,
      });
    });
}

// Retrieve Book
const RetrieveBook = () => (dispatch) => {
  axios
   .get(apiUrl)
   .then((response) => {
    const bookItems = Object.keys(response.data).map(key => {
      const bookItem = response.data[key][0];
      return {
        id: key,
        ...bookItem,
      };
    });
      dispatch({
        type: RETRIEVE_BOOK,
        payload: bookItems,
      });
    });

}

// add handleBook reducers
const handleBookReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, {
          id: action.book.id,
          title: action.book.title,
          author: action.book.author,
        },
      ];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.bookId);
    case RETRIEVE_BOOK:
      return [...action.payload];
    default: return state;
  }
};

export { handleBookReducer, DeleteBook, addBook, RetrieveBook };
