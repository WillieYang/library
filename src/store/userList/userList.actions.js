import Qs from 'qs';
import request from '../../utils/request';

import * as constants from './userList.constants';

const createUser = data => async (dispatch, getState) => {
  let signUpRes = '';
  try {
    const res = await request.post('/api/users', Qs.stringify(data));
    signUpRes = {
      infoMsg: 'A new use has been created, please login!',
      status: res.data.status,
    };
    dispatch({ type: constants.SIGN_UP_USER, data: signUpRes });
  } catch (e) {
    signUpRes = {
      infoMsg: e.response.data.error.errmsg,
      status: e.response.data.status,
    };
    dispatch({ type: constants.SIGN_UP_FAILED, data: signUpRes });
  }
};

const loginUser = data => async (dispatch, getState) => {
  let loginRes = '';
  try {
    const res = await request.post('/api/login', Qs.stringify(data));
    loginRes = {
      status: res.data.status,
      token: res.data.token,
      result: res.data.result,
    };
    dispatch({ type: constants.LOGIN_USER, data: loginRes });
  } catch (e) {
    loginRes = {
      infoMsg: e.response.data.error,
      status: e.response.data.status,
    };
    dispatch({ type: constants.LOGIN_FAILED, data: loginRes });
  }
};

const unsetSignUp = data => async (dispatch, getState) => {
  dispatch({ type: constants.SIGN_UP_UNSET, data: {} });
};

const unsetLogin = data => async (dispatch, getState) => {
  dispatch({ type: constants.LOGIN_UNSET, data: {} });
};

export {
  createUser,
  unsetSignUp,
  loginUser,
  unsetLogin,
};
