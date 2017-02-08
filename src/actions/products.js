import axios from 'axios';
import { AsyncStorage } from 'react-native';

import {
  TOGGLE_FILTER,
  SELECT_PRODUCT,
  CLOSE_PRODUCT,
  GET_PRODUCTS,
  CHANGE_FILTER,
  MODIFY_CART,
} from './types';

const ROOT_URL = 'http://localhost:3090';
const JWT_TOKEN = 'JWT_TOKEN';

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
  return async function (dispatch) {
    let authorization = await AsyncStorage.getItem(JWT_TOKEN);
    axios.get(`${ROOT_URL}/products`, {
      headers: { authorization },
    })
    .then(response => {
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data.products
      });
    });
  }
}

export const modifyCart = (productId, quantity) => {
  return async function (dispatch) {
    let authorization = await AsyncStorage.getItem(JWT_TOKEN);
    switch (quantity) {
      case 'add':
      axios.post(`${ROOT_URL}/purchases`,
      {
        headers: { authorization },
        productid: productId,
      })
      .then(response => {
        dispatch({
          type: MODIFY_CART,
          payload: response,
        });
      });
      break;
      case 0:
      axios.delete(`${ROOT_URL}/purchases`,
      {
        headers: { authorization },
        productid: productId,
      })
      .then(response => {
        dispatch({
          type: MODIFY_CART,
          payload: response,
        });
      });
      break;
      default:
      axios.patch(`${ROOT_URL}/purchases`,
      {
        headers: { authorization },
        productid: productId,
        quantity: quantity,
      })
      .then(response => {
        dispatch({
          type: MODIFY_CART,
          payload: response,
        });
      });
      break;
    }
  }
}
