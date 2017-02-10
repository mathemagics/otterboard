import { AsyncStorage } from 'react-native';
import axios from 'axios';

import { GET_CART, CONFIRM_ORDER, EMPTY_CART } from './types';

const ROOT_URL = 'http://localhost:3090';
const JWT_TOKEN = 'JWT_TOKEN';

export const getCart = () => {
  return async function (dispatch) {
    let authorization = await AsyncStorage.getItem(JWT_TOKEN);
    axios.get(`${ROOT_URL}/purchases`, {
      headers: { authorization },
    })
    .then(response => {
      const cartProducts = response.data.purchases.map((purchase) => {
        const { _product, quantity, _id } = purchase;
        return { ..._product, purchaseid: _id, quantity };
      });
      dispatch({
        type: GET_CART,
        payload: cartProducts,
      });
    });
  }
}

export const confirmCart = () => {
  return dispatch => {
    axios.post(`${ROOT_URL}/orders`)
    .then(() => {
      dispatch({
        type: CONFIRM_ORDER,
      });
    });
  };
};

export const emptyCart = () => {
  return dispatch => {
    axios.post(`${ROOT_URL}/deletepurchases`)
    .then(() => {
      dispatch({
        type: EMPTY_CART,
      });
    });
  };
}
