import defaultState from './globalMessage.state';
import * as constants from './globalMessage.constants';

const globalMessage = (state = defaultState, action) => {
  switch (action.type) {
    case constants.MESSAGE_SHOW:
      return {
        ...state,
        messageOpen: true,
        messageContent: action.data,
      };
    case constants.MESSAGE_CLEAR:
      return {
        ...state,
        messageOpen: false,
      };
    default:
      return state;
  }
};

export default {
  globalMessage,
};
