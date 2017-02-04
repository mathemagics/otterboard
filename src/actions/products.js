import {
  TOGGLE_FILTER,
  SELECT_PRODUCT,
  CLOSE_PRODUCT,
  GET_CART,
  GET_PRODUCTS,
} from './types';

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

export const getProducts = () => ({
  type: GET_PRODUCTS,
  payload: null,
});
