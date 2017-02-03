import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';


import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SIGNIN_ATTEMPT,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAIL
} from './types';

const ROOT_URL = 'http://localhost:3090';
const JWT_TOKEN = 'JWT_TOKEN';

export const emailChanged = (text) => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = (text) => ({
    type: PASSWORD_CHANGED,
    payload: text
});

export const signinUser = ({ email, password }) => (
  dispatch => {
    dispatch({ type: SIGNIN_ATTEMPT });
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then((response) => {
      console.log('then', response);
      // save JWT TOKEN in async
      AsyncStorage.setItem(JWT_TOKEN, response.data.token);
      dispatch({ type: SIGNIN_USER_SUCCESS });
      // route to main screen
      Actions.main();
    })
    .catch(({ response }) => {
      dispatch({
        type: SIGNIN_USER_FAIL,
        payload: response.data.error,
      });
    });
  }
);
