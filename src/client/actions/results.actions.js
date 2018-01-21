import { fetchBeasts } from './../../server/proxy/proxy';

import {
  UPDATE_BEAST_LIST,
  UPDATE_ACTIVE_BEAST,
} from './../../constants/redux-constants';

export const fetchBeastsAction = beastType => {
  return dispatch => {
    return fetchBeasts(beastType)
      .then(data => {
        dispatch({ type: UPDATE_BEAST_LIST, payload: { data, beastType } });
        dispatch({ type: UPDATE_ACTIVE_BEAST, payload: beastType });
      })
      .catch(error => console.log(error));
  };
};
