import React from 'react';
import { View, Text } from 'react-native';

import {
  rowStyle,
  contentStyle,
  titleStyle,
  priceStyle,
  priceTextStyle,
} from './styles';

export default () => (
  <View style={rowStyle}>
    <View style={contentStyle}>
      <Text style={titleStyle}>Product</Text>
    </View>
    <View style={priceStyle}>
      <Text style={priceTextStyle}>Price</Text>
    </View>
  </View>
);
