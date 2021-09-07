import * as constants from './globalMessage.constants';

const showMessage = data => async (dispatch, getState) => {
  dispatch({ type: constants.MESSAGE_SHOW, data });
};

const clearMessage = () => async (dispatch, getState) => {
  dispatch({ type: constants.MESSAGE_CLEAR });
};

export {
  showMessage,
  clearMessage,
};
