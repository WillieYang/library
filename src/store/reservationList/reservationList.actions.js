import Qs from 'qs';
import API from '../../utils/API';

import * as constants from './reservationList.constants';

const getReservationList = data => async (dispatch, getState) => {
  dispatch({ type: constants.GET_RESERVATION_LIST_START, data: [] });
  try {
    const res = await API.get('/api/reservations');
    dispatch({ type: constants.RESERVATION_LIST, data: res.data });
  } catch (e) {
    dispatch({ type: constants.GET_RESERVATION_LIST_FAILED, data: e });
  }
};

const createReservation = data => async (dispatch, getState) => {
  try {
    await API.post('/api/reservations', Qs.stringify(data));
  } catch (e) {
    dispatch({ type: constants.GET_RESERVATION_LIST_FAILED, data: e });
  }
};

const clearReservation = data => async (dispatch, getState) => {
  try {
    await API.delete(`reservations/${data}`);
  } catch (e) {
    dispatch({ type: constants.GET_RESERVATION_LIST_FAILED, data: e });
  }
};

export {
  getReservationList,
  createReservation,
  clearReservation,
};
