import { API } from '../../utils/API';
import Qs from 'qs'

import * as constants from './bookList.constants';

const getBookList = data => async (dispatch, getState) => {
  dispatch({ type: constants.GET_BOOK_LIST_START, data: [] });
  try {
    const res = await API.get('books');
    dispatch({ type: constants.BOOK_LIST, data: res.data });
  } catch (e) {
    console.log('Failed', e);
    dispatch({ type: constants.GET_BOOK_LIST_FAILED, data: e });
  }
};

const createBook = data => async (dispatch, getState) => {
  try {
    console.log('action data', data);
    await API.post('books', Qs.stringify(data));
    // dispatch({ type: constants.BOOK_LIST, data: res.data });
  } catch (e) {
    console.log('Failed', e);
    dispatch({ type: constants.GET_BOOK_LIST_FAILED, data: e });
  }
};

export {
  getBookList,
  createBook,
};
