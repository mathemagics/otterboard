import { GET_CART, ADD_TO_CART } from '../actions/types';

const INITIAL_STATE = { };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CART:
      return { ...state, data: action.payload };
    case ADD_TO_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
