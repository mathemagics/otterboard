import { GET_CART, CONFIRM_ORDER, EMPTY_CART } from '../actions/types';

const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CART:
      return { ...state, data: action.payload };
    case CONFIRM_ORDER:
      return { ...state, data: [], };
    case EMPTY_CART:
      return { ...state, data: [], }
    default:
      return state;
  }
};
