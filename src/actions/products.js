import { TOGGLE_FILTER, SELECT_PRODUCT } from './types';

export const toggleFilter = () => ({
  type: TOGGLE_FILTER,
});

export const selectProduct = (productId) => ({
  type: SELECT_PRODUCT,
  payload: productId,
});
