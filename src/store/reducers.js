import { combineReducers } from 'redux';
import bookListReducer from './bookList/bookList.reducers';
import reservationListReducer from './reservationList/reservationList.reducers';
import userReducer from './userList/userList.reducers';

const allReducres = Object.assign(
  {},
  bookListReducer,
  reservationListReducer,
  userReducer,
);

export default combineReducers(allReducres);
