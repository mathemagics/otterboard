import { TOGGLE_FILTER, SELECT_PRODUCT, CLOSE_PRODUCT } from '../actions/types';

const INITIAL_STATE = { filter: false, selected: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return { ...state, filter: !state.filter };
    case SELECT_PRODUCT:
      return { ...state, selected: action.payload };
    case CLOSE_PRODUCT:
      return { ...state, selected: null };
    default:
      return state;
  }
};
