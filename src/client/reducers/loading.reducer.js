import { LOADING } from './../../constants/redux-constants';

const loading = (state = false, action) => {
  switch (action.type) {
    case LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default loading;
