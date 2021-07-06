import Qs from 'qs';
import API from '../../utils/API';

import * as constants from './userList.constants';

const createUser = data => async (dispatch, getState) => {
  try {
    console.log('action data', data);
    await API.post('/api/users', Qs.stringify(data));
  } catch (e) {
    console.log('Failed', e);
    dispatch({ type: constants.SIGN_UP_FAILED, data: e });
  }
};

export {
  createUser,
};
