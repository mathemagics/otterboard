import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {
  rowStyle,
  contentStyle,
  titleStyle,
  priceStyle,
  priceTextStyle,
  purveyorStyle,
  touchableStyle,
} from './styles';

export default (props) => (
      <View style={rowStyle}>
      <TouchableOpacity style={touchableStyle} onPress={props.onPress}>
      <View style={contentStyle}>
        <Text style={titleStyle}>Avocados 12s</Text>
        <Text style={purveyorStyle}>Yen Brothers</Text>
        <Text style={purveyorStyle}>Sale In-Stock</Text>
      </View>
      <View style={priceStyle}>
        <Text style={priceTextStyle}>$26.21</Text>
      </View>
      </TouchableOpacity>
      </View>
);
