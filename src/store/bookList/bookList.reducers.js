import defaultState from './bookList.state';

import * as constants from './bookList.constants';

const bookList = (state = defaultState.bookList, action) => {
  switch (action.type) {
    case constants.BOOK_LIST:
      return action.data;
    case constants.GET_BOOK_LIST_START:
      return action.data;
    case constants.GET_BOOK_LIST_FAILED:
      return action.data;
    default:
      return state;
  }
};

export default {
  bookList,
};
