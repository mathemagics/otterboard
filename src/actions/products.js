import { TOGGLE_FILTER, SELECT_PRODUCT, CLOSE_PRODUCT, GET_CART, } from './types';

export const toggleFilter = () => ({
  type: TOGGLE_FILTER,
});

export const selectProduct = (product) => ({
  type: SELECT_PRODUCT,
  payload: product,
});

export const closeProduct = () => ({
  type: CLOSE_PRODUCT,
});

export const getCart = () => ({
  type: GET_CART,
  payload: null,
});
