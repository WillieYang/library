import defaultState from './userList.state';

import * as constants from './userList.constants';

// const userList = (state = defaultState.userList, action) => {
//   switch (action.type) {
//     case constants.BOOK_LIST:
//       return action.data;
//     case constants.GET_BOOK_LIST_START:
//       return action.data;
//     case constants.GET_BOOK_LIST_FAILED:
//       return action.data;
//     default:
//       return state;
//   }
// };

const loginUser = (state = defaultState.loginUser, action) => {
  switch (action.type) {
    case constants.LOGIN_USER:
      return action.data;
    case constants.LOGIN_START:
      return action.data;
    case constants.LOGIN_FAILED:
      return action.data;
    default:
      return state;
  }
};

const signUpUser = (state = defaultState.signUpUser, action) => {
  switch (action.type) {
    case constants.SIGN_UP_USER:
      return action.data;
    case constants.SIGN_UP_START:
      return action.data;
    case constants.SIGN_UP_FAILED:
      return action.data;
    default:
      return state;
  }
};

export default {
  // userList,
  signUpUser,
  loginUser,
};
