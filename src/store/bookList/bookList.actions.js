import Qs from 'qs';
import request from '../../utils/request';

import * as constants from './bookList.constants';

const getBookList = data => async (dispatch, getState) => {
  dispatch({ type: constants.GET_BOOK_LIST_START, data: [] });
  try {
    const res = await request.get('/api/books');
    dispatch({ type: constants.BOOK_LIST, data: res.data.result });
  } catch (e) {
    dispatch({ type: constants.GET_BOOK_LIST_FAILED, data: e });
  }
};

const createBook = data => async (dispatch, getState) => {
  try {
    await request.post('/api/books', Qs.stringify(data));
  } catch (e) {
    dispatch({ type: constants.GET_BOOK_LIST_FAILED, data: e });
  }
};

export {
  getBookList,
  createBook,
};
