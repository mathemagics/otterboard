import { TOGGLE_FILTER, SELECT_PRODUCT } from '../actions/types';

const INITIAL_STATE = { filter: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return { ...state, filter: !state.filter };
    case SELECT_PRODUCT:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};
