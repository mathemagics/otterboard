import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'apsl-react-native-button';

const styles = {
  textStyle: {
    width: 200,
    fontFamily: 'Avenir',
    fontWeight: '200',
  },
  buttonStyle: {
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#008445',
    backgroundColor: '#ffffff'
  },
};

const { buttonStyle, textStyle } = styles;

export default () => (
  <View style={{ flex: 1 }}>
    <Button style={buttonStyle} textStyle={textStyle} onPress={Actions.purveyors}>
      Purveyors
    </Button>
    <Button style={buttonStyle} textStyle={textStyle} onPress={Actions.products}>
      Products
    </Button>
    <Button style={buttonStyle} textStyle={textStyle} onPress={Actions.orders}>
      Orders
    </Button>
  </View>
);
