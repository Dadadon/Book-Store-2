import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { checkStatusReducer } from './Categories/categories';
import { handleBookReducer } from './Books/book';

const reducers = combineReducers({
  book: handleBookReducer,
  status: checkStatusReducer,
});

const storeConfig = createStore(
  reducers,
   applyMiddleware(thunk),
  );

export default storeConfig;
