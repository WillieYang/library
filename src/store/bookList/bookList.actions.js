import Qs from 'qs';
import API from '../../utils/API';

import * as constants from './bookList.constants';

const getBookList = data => async (dispatch, getState) => {
  dispatch({ type: constants.GET_BOOK_LIST_START, data: [] });
  try {
    const res = await API.get('/api/books');
    dispatch({ type: constants.BOOK_LIST, data: res.data });
  } catch (e) {
    dispatch({ type: constants.GET_BOOK_LIST_FAILED, data: e });
  }
};

const createBook = data => async (dispatch, getState) => {
  try {
    await API.post('/api/books', Qs.stringify(data));
  } catch (e) {
    dispatch({ type: constants.GET_BOOK_LIST_FAILED, data: e });
  }
};

export {
  getBookList,
  createBook,
};
