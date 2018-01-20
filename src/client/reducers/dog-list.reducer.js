import { UPDATE_BEAST_LIST } from './../../constants/redux-constants';

const dogList = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BEAST_LIST:
      return action.payload.beastType === 'dog' ? action.payload.data : state;
    default:
      return state;
  }
};

export default dogList;
