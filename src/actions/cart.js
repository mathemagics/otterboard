import axios from 'axios';

import {
  GET_CART,
  CONFIRM_ORDER,
  EMPTY_CART,
  ADD_TO_CART,
  MODIFY_CART
} from './types';

const ROOT_URL = 'http://localhost:3090';

export const getCart = () => {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/purchases`)
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

export const modifyCart = (product, quantity, previous ) => {
  return dispatch => {
    const { _id, purchaseid } = product;
    if (previous === 0 && quantity === 1) {
      axios.post(`${ROOT_URL}/purchases`,
      {
        productid: _id,
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
    axios.delete(`${ROOT_URL}/deletepurchases`)
    .then(() => {
      dispatch({
        type: EMPTY_CART,
      });
    });
  };
}
