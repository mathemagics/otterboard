import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Button } from './common';

export default () => (
  <View style={{ top: 120, height: 600, backgroundColor: '#fff' }}>
    <View style={{ height: 45, top: 30 }}>
      <Button>
        Purveyors
      </Button>
    </View>
    <View style={{ height: 45, top: 30 }}>
      <Button onPress={Actions.products}>
        Products
      </Button>
    </View>
    <View style={{ height: 45, top: 30 }}>
      <Button>
        Orders
      </Button>
    </View>
  </View>
);
