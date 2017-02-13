import { combineReducers } from 'redux';
import auth from './auth';
import products, * as fromProducts from './products';
import cart from './cart';

export default combineReducers({
    auth,
    products,
    cart,
});

export const getFilteredProducts = (state) => {
  return fromProducts.getFilteredProducts(state.products);
};
