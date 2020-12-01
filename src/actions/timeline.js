import * as api from '../api/timeline';
import { GET_HOME_TIMELINE, SET_CURRENT_POST, GET_PUBLIC_TIMELINE } from '../constants/actions';
import { resetComments } from './comments';

export function getHomeTimeline(params = {}) {
  return async dispatch => {
    const result = await api.getHomeTimeline(params);
    dispatch({
      type: GET_HOME_TIMELINE,
      payload: result,
      params,
    });
  }
}

export function getPublicTimeline(params = {}) {
  return async dispatch => {
    const result = await api.getPublicTimeline(params);
    dispatch({
      type: GET_PUBLIC_TIMELINE,
      payload: result,
      params,
    });
  }
}

export function setCurrentPost(payload = {}) {
  return async dispatch => {
    await dispatch(resetComments());
    dispatch({
      type: SET_CURRENT_POST,
      payload,
    });
  }
}
