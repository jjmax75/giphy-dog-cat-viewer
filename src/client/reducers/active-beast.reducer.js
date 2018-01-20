import { UPDATE_ACTIVE_BEAST } from './../../constants/redux-constants';

const activeBeast = (state = '', action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_BEAST:
      return action.payload;
    default:
      return state;
  }
};

export default activeBeast;
