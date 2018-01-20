import { fetchBeast } from './../../server/proxy/proxy';

export const fetchBeastsAction = beastType => {
  return dispatch => {
    return fetchBeast(beastType)
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };
};
