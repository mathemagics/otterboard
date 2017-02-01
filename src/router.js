import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import MainMenu from './components/mainMenu';
import Products from './components/products';
import Purveyors from './components/purveyors';
import Orders from './components/orders';

const RouterComponent = () => (
  <Router
    sceneStyle={{ paddingTop: 85 }}
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
    <Scene key='main'>
      <Scene initial key='menu' component={MainMenu} title="Main Menu" />
      <Scene key='products' component={Products} title="Products" />
      <Scene key='purveyors' component={Purveyors} title="Purveyors" />
      <Scene key='orders' component={Orders} title="Orders" />
    </Scene>
</Router>
);


export default RouterComponent;
