import axios from 'axios';

import {
  TOGGLE_FILTER,
  SELECT_PRODUCT,
  CLOSE_PRODUCT,
  GET_PRODUCTS,
  CHANGE_FILTER,
  MODIFY_CART,
  ADD_TO_CART,
} from './types';

const ROOT_URL = 'http://localhost:3090';

export const toggleFilter = (type) => ({
  type: TOGGLE_FILTER,
  payload: type,
});

export const changeFilter = (filterType, content) => {
  return ({
    type: CHANGE_FILTER,
    payload: { filterType, content, },
  });
}

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

export const modifyCart = (productid, purchaseid, quantity, previous ) => {
  return dispatch => {
    console.log('prod:', productid, 'purch:', purchaseid, 'q:', quantity, 'p:', previous);
    if (previous === 0 && quantity === 1) {
      axios.post(`${ROOT_URL}/purchases`,
      {
        productid,
      })
      .then(response => {
        dispatch({
          type: ADD_TO_CART,
          payload: response.data,
        });
      });
    } else if (quantity === 0) {
      axios.delete(`${ROOT_URL}/purchases/${purchaseid}`)
      .then(response => {
        dispatch({
          type: MODIFY_CART,
          payload: response,
        });
      });
    } else {
      axios.patch(`${ROOT_URL}/purchases/${purchaseid}`,
      {
        quantity: quantity,
      })
      .then(response => {
        dispatch({
          type: MODIFY_CART,
          payload: response,
        });
      });
    }
  }
}
