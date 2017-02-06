import {
  TOGGLE_FILTER,
  SELECT_PRODUCT,
  CLOSE_PRODUCT,
  GET_CART,
  GET_PRODUCTS
 } from '../actions/types';

const INITIAL_STATE = { categories: false, purveyors: false, selected: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        ...INITIAL_STATE,
        [action.payload]: !state[action.payload] };
    case SELECT_PRODUCT:
      return { ...state, selected: action.payload };
    case CLOSE_PRODUCT:
      return { ...state, selected: null };
    case GET_CART:
      return { ...state, cart: action.payload };
    case GET_PRODUCTS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
