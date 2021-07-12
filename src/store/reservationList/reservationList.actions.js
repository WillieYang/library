import Qs from 'qs';
import request from '../../utils/request';

import * as constants from './reservationList.constants';

const getReservationList = data => async (dispatch, getState) => {
  dispatch({ type: constants.GET_RESERVATION_LIST_START, data: [] });
  try {
    const res = await request.get('/api/reservations');
    dispatch({ type: constants.RESERVATION_LIST, data: res.data.result });
  } catch (e) {
    dispatch({ type: constants.GET_RESERVATION_LIST_FAILED, data: e });
  }
};

const createReservation = data => async (dispatch, getState) => {
  try {
    await request.post('/api/reservations', Qs.stringify(data));
  } catch (e) {
    dispatch({ type: constants.GET_RESERVATION_LIST_FAILED, data: e });
  }
};

const clearReservation = data => async (dispatch, getState) => {
  try {
    await request.delete(`reservations/${data}`);
  } catch (e) {
    dispatch({ type: constants.GET_RESERVATION_LIST_FAILED, data: e });
  }
};

export {
  getReservationList,
  createReservation,
  clearReservation,
};
