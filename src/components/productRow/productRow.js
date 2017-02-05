import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Adder from '../common/adder';

import {
  rowStyle,
  contentStyle,
  titleStyle,
  purveyorStyle,
  touchableStyle,
  imageStyle,
} from './styles';

export default (props) => {
  const { name, purveyor, sale, price, origin } = props.product;
  return (
    <View style={rowStyle}>
      <TouchableOpacity style={touchableStyle} onPress={props.onPress}>
        <Image style={imageStyle} source={require('../../images/avocados.jpg')} />
        <View style={contentStyle}>
          <Text style={titleStyle}>{name}</Text>
          <Text style={purveyorStyle}>{'Yen Bros'}</Text>
          <Text style={purveyorStyle}>{origin}</Text>
          <Adder price={price} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
