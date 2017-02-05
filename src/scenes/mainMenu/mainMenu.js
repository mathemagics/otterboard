import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'apsl-react-native-button';

import { buttonStyle, textStyle } from './styles';

export default () => (
  <View style={{ flex: 1, backgroundColor: '#1A3461', justifyContent: 'center' }}>
    <Button style={buttonStyle} textStyle={textStyle} onPress={Actions.purveyors}>
      Purveyors
    </Button>
    <Button style={buttonStyle} textStyle={textStyle} onPress={Actions.products}>
      Products
    </Button>
    <Button style={buttonStyle} textStyle={textStyle} onPress={Actions.orders}>
      Orders
    </Button>
    <Button style={buttonStyle} textStyle={textStyle} onPress={Actions.cart}>
      Shopping Cart
    </Button>
  </View>
);
