import Qs from 'qs';
import API from '../../utils/API';

import * as constants from './userList.constants';

const createUser = data => async (dispatch, getState) => {
  let signUpRes = '';
  try {
    const res = await API.post('/api/users', Qs.stringify(data));
    if (res.data.status === 201) {
      signUpRes = {
        infoMsg: 'A new use has been created, please login!',
        severity: 'success',
      };
    }
    dispatch({ type: constants.SIGN_UP_USER, data: signUpRes });
  } catch (e) {
    if (e.response.data.status === 500) {
      signUpRes = {
        infoMsg: e.response.data.error.errmsg,
        severity: 'error',
      };
    }
    dispatch({ type: constants.SIGN_UP_FAILED, data: signUpRes });
  }
};

const unsetSignUp = data => async (dispatch, getState) => {
  dispatch({ type: constants.SIGN_UP_UNSET, data: {} });
};

export {
  createUser,
  unsetSignUp,
};
