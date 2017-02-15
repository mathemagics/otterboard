import {
  TOGGLE_FILTER,
  CHANGE_FILTER,
  SELECT_PRODUCT,
  CLOSE_PRODUCT,
  GET_PRODUCTS,
  MODIFY_CART,
  ADD_TO_CART,
 } from '../actions/types';

const INITIAL_STATE = {
  categoriesOpen: false,
  purveyorsOpen: false,
  currentCategories: [],
  currentPurveyors: [],
  selected: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        ...INITIAL_STATE,
        [action.payload]: !state[action.payload] };
    case CHANGE_FILTER: {
      // changes the given filter with a new array
      const { filterType, content } = action.payload;
      return { ...state, [filterType]: content }
    }
    case SELECT_PRODUCT:
      return { ...state, selected: action.payload };
    case CLOSE_PRODUCT:
      return { ...state, selected: null };
    case GET_PRODUCTS:
      return { ...state, data: action.payload };
    case MODIFY_CART:
      return { ...state };
    case ADD_TO_CART: {
      const { _id, productid } = action.payload;
      const newData = state.data.map( product => {
        if (product.productid === productid) {
          return { ...product, purchaseid: _id };
        } else {
          return { ...product };
        }
      });
      return { ...state, data: newData}
    }
    default:
      return state;
  }
};
