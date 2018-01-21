import { fetchBeasts } from './../../server/proxy/proxy';

import {
  UPDATE_BEAST_LIST,
  UPDATE_ACTIVE_BEAST,
  LOADING,
} from './../../constants/redux-constants';

export const fetchBeastsAction = (beastType, history) => {
  return dispatch => {
    dispatch({ type: LOADING, payload: true });
    return fetchBeasts(beastType)
      .then(data => {
        dispatch({ type: UPDATE_BEAST_LIST, payload: { data, beastType } });
        dispatch({ type: UPDATE_ACTIVE_BEAST, payload: beastType });
        history.push('/results');
        dispatch({ type: LOADING, payload: false });
      })
      .catch(error => console.log(error));
  };
};
