import { AsyncStorage } from 'react-native';
import axios from 'axios';

import { GET_CART, ADD_TO_CART } from './types';

const ROOT_URL = 'http://localhost:3090';
const JWT_TOKEN = 'JWT_TOKEN';

export const addToCart = (productId) => {
  return async function (dispatch) {
    let authorization = await AsyncStorage.getItem(JWT_TOKEN);
    axios.post(`${ROOT_URL}/purchases`, {
      headers: { authorization },
      product: { _id: productId },
    })
    .then(() => {
      dispatch({
        type: ADD_TO_CART,
      });
    });
  }
}

export const getCart = () => {
  return async function (dispatch) {
    let authorization = await AsyncStorage.getItem(JWT_TOKEN);
    axios.get(`${ROOT_URL}/purchases`, {
      headers: { authorization },
    })
    .then(response => {
      dispatch({
        type: GET_CART,
        payload: response.data.purchases
      });
    });
  }
}
