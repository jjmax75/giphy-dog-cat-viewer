import { fetchBeasts } from './../../server/proxy/proxy';

import { LIMIT } from './../../constants/app-constants';

import {
  UPDATE_BEAST_LIST,
  UPDATE_ACTIVE_BEAST,
  LOADING,
} from './../../constants/redux-constants';

export const getBeastsAction = (beastType, offset, history) => {
  return (dispatch, getState) => {
    dispatch({ type: LOADING, payload: true });
    return fetchBeasts(beastType, offset)
      .then(data => {
        dispatch({ type: UPDATE_BEAST_LIST, payload: { data, beastType } });
        dispatch({ type: UPDATE_ACTIVE_BEAST, payload: beastType });
        history.push(`/results/${offset}`);
        dispatch({ type: LOADING, payload: false });
      })
      .catch(error => console.log(error));
  };
};
