import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SIGNIN_ATTEMPT,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  errors: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case SIGNIN_ATTEMPT:
      return { ...state, loading: true, errors: '' };
    case SIGNIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case SIGNIN_USER_FAIL:
      return {
        ...state,
        password: '',
        errors: 'Authentication Failed',
        loading: false,
      };
    default:
      return state;
  }
};
