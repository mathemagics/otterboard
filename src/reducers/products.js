import { TOGGLE_FILTER } from '../actions/types';

const INITIAL_STATE = { filter: false };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case TOGGLE_FILTER:
      return { ...state, filter: !state.filter };
    default:
      return state;
  }
};
