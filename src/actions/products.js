import axios from 'axios';

import {
  TOGGLE_FILTER,
  SELECT_PRODUCT,
  CLOSE_PRODUCT,
  GET_PRODUCTS,
  CHANGE_FILTER,
  CHANGE_SEARCH,
} from './types';

const ROOT_URL = 'http://localhost:3090';

export const toggleFilter = (type) => ({
  type: TOGGLE_FILTER,
  payload: type,
});

export const changeFilter = (filterType, content) => ({
    type: CHANGE_FILTER,
    payload: { filterType, content, },
  });

export const changeSearch = (text) => ({
  type: CHANGE_SEARCH,
  payload: text,
});

export const selectProduct = (product) => ({
  type: SELECT_PRODUCT,
  payload: product,
});

export const closeProduct = () => ({
  type: CLOSE_PRODUCT,
});

export const getProducts = () => {
  return dispatch => {
    axios.get(`${ROOT_URL}/products`)
    .then(response => {
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data.products
      });
    });
  }
};
