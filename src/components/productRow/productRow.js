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

export default (props) => {
  const { name, purveyor, sale, price, } = props.product;
  console.log('onpress', props.onPress);
  return (
    <View style={rowStyle}>
      <TouchableOpacity style={touchableStyle} onPress={props.onPress}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={titleStyle}>{name}</Text>
    </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={contentStyle}>
        <Text style={purveyorStyle}>{purveyor}</Text>
        { sale && <Text style={purveyorStyle}>Sale</Text> }
        </View>
        <View style={priceStyle}>
          <Text style={priceTextStyle}>${price}</Text>
        </View>
      </View>

      </TouchableOpacity>
    </View>
  );
};
