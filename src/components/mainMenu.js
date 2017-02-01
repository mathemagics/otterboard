import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Button } from './common';

export default () => (
  <View style={{ top: 120, height: 600, backgroundColor: '#fff' }}>
    <View style={{ height: 45, top: 30 }}>
      <Button onPress={Actions.purveyors}>
        Purveyors
      </Button>
    </View>
    <View style={{ height: 45, top: 30 }}>
      <Button onPress={Actions.products}>
        Products
      </Button>
    </View>
    <View style={{ height: 45, top: 30 }}>
      <Button onPress={Actions.orders}>
        Orders
      </Button>
    </View>
  </View>
);
