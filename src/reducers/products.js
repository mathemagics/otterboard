import {
  TOGGLE_FILTER,
  CHANGE_FILTER,
  CHANGE_SEARCH,
  SELECT_PRODUCT,
  CLOSE_PRODUCT,
  GET_PRODUCTS,
  ADD_TO_CART,
 } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  categoriesOpen: false,
  purveyorsOpen: false,
  currentCategories: [],
  currentPurveyors: [],
  search: '',
  selected: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        [action.payload]: !state[action.payload] };
    case CHANGE_FILTER: {
      // changes the given filter with a new array
      const { filterType, content } = action.payload;
      return { ...state, [filterType]: content }
    }
    case CHANGE_SEARCH: {
      return { ...state, search: action.payload };
    }
    case SELECT_PRODUCT:
      return { ...state, selected: action.payload };
    case CLOSE_PRODUCT:
      return { ...state, selected: null };
    case GET_PRODUCTS:
      return { ...state, data: action.payload };
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

// selector for filtered products
export const getFilteredProducts = (state) => {
  const { data, search, currentCategories } = state;
  const term = search.toLowerCase();
  return data.filter(product => {
    const name =  product.name.toLowerCase();
    return (
      // checks search term match && match selected categories (if any)
      (term.length === 0 || name.includes(term)) &&
      (currentCategories.length === 0 || currentCategories.includes(product.category))
    );
  });
}
