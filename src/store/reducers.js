import { combineReducers } from 'redux';
import bookListReducer from './bookList/bookList.reducers';
import reservationListReducer from './reservationList/reservationList.reducers';

const allReducres = Object.assign(
  {},
  bookListReducer,
  reservationListReducer,
);

export default combineReducers(allReducres);