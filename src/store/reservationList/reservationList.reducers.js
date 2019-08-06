import defaultState from './reservationList.state';

import * as constants from './reservationList.constants';

const reservationList = (state = defaultState.reservationList, action) => {
  switch (action.type) {
    case constants.RESERVATION_LIST:
      return action.data;
    case constants.GET_RESERVATION_LIST_START:
      return action.data;
    case constants.GET_RESERVATION_LIST_FAILED:
      return action.data;
    default:
      return state;
  }
};

export default {
  reservationList,
};
