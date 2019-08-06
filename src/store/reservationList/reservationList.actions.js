import { API } from '../../utils/API';
import Qs from 'qs'

import * as constants from './reservationList.constants';

const getReservationList = data => async (dispatch, getState) => {
  dispatch({ type: constants.GET_RESERVATION_LIST_START, data: [] });
  try {
    const res = await API.get('reservations');
    dispatch({ type: constants.RESERVATION_LIST, data: res.data });
  } catch (e) {
    console.log('Failed', e);
    dispatch({ type: constants.GET_RESERVATION_LIST_FAILED, data: e });
  }
};

const createReservation = data => async (dispatch, getState) => {
  try {
    console.log('action data', data);
    await API.post('reservations', Qs.stringify(data));
    // dispatch({ type: constants.RESERVATION_LIST, data: res.data });
  } catch (e) {
    console.log('Failed', e);
    dispatch({ type: constants.GET_RESERVATION_LIST_FAILED, data: e });
  }
};

const clearReservation = data => async (dispatch, getState) => {
  try {
    console.log('action data', data);
    await API.delete(`reservations/${data}`);
    // dispatch({ type: constants.RESERVATION_LIST, data: res.data });
  } catch (e) {
    console.log('Failed', e);
    dispatch({ type: constants.GET_RESERVATION_LIST_FAILED, data: e });
  }
};

export {
  getReservationList,
  createReservation,
  clearReservation,
};
