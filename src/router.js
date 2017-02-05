import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginForm from './scenes/loginForm';
import MainMenu from './scenes/mainMenu';
import Products from './scenes/products';
import Purveyors from './scenes/purveyors';
import Orders from './scenes/orders';
import Cart from './scenes/cart';

const RouterComponent = () => (
  <Router
    hideNavBar={false}
    navigationBarStyle={{
      backgroundColor: '#1A3461',
      borderBottomColor: 'transparent',
      borderBottomWidth: 65 }}
    titleStyle={{ color: '#fff', fontWeight: '700' }}
  >
    <Scene key='auth'>
      <Scene initial key='login' component={LoginForm} title="Please Login" />
    </Scene>
    <Scene
      key='main'
      rightTitle={<Icon name="shopping-cart" size={24} color="#fff" />}
      onRight={() => Actions.cart()}
      style={{ backgroundColor: '#1A3461' }}
    >
      <Scene initial key='menu' component={MainMenu} title="Main Menu" />
      <Scene key='products' component={Products} title="Products" />
      <Scene key='purveyors' component={Purveyors} title="Purveyors" />
      <Scene key='orders' component={Orders} title="Orders" />
      <Scene key='cart' component={Cart} title="Shopping Cart" />
    </Scene>
</Router>
);


export default RouterComponent;
