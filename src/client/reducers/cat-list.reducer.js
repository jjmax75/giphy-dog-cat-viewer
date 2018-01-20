import { UPDATE_BEAST_LIST } from './../../constants/redux-constants';

const catList = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BEAST_LIST:
      return action.payload.beastType === 'cat' ? action.payload.data : state;
    default:
      return state;
  }
};

export default catList;
