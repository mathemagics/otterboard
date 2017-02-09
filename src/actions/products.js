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

export const modifyCart = (productid, quantity, previous) => {
  console.log('modifying cart', productid, quantity, previous);
  return async function (dispatch) {
    let authorization = await AsyncStorage.getItem(JWT_TOKEN);
    if (previous === 0 && quantity === 1) {
      console.log('posting with auth', authorization);
      axios.defaults.headers.common['authorization'] = authorization;
      axios.post(`${ROOT_URL}/purchases`,
      {
        productid ,
      })
      .then(response => {
        console.log('resp');
        dispatch({
          type: MODIFY_CART,
          // payload: response,
        });
      });
    } else if (quantity === 0) {
      axios.delete(`${ROOT_URL}/purchases/${productid}`,
      {
        headers: { authorization },
        productid,
      })
      .then(response => {
        dispatch({
          type: MODIFY_CART,
          // payload: response,
        });
      });
    } else {
      axios.patch(`${ROOT_URL}/purchases/${productid}`,
      {
        headers: { authorization },
        productid,
        quantity: quantity,
      })
      .then(response => {
        console.log('patch');
        dispatch({
          type: MODIFY_CART,
          // payload: response,
        });
      });
    }
  }
}
