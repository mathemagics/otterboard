import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Adder from '../common/adder';
import Eggs from '../../images/eggs.jpeg';
import Sausages from '../../images/sausages.jpeg';
import Bananas from '../../images/bananas.jpeg';
import Avocados from '../../images/avocados.jpeg';

import {
  rowStyle,
  contentStyle,
  titleStyle,
  purveyorStyle,
  touchableStyle,
  imageStyle,
  leftStyle,
} from './styles';

export default (props) => {
  const { name, in_stock, price, origin } = props.product;
  let imgSrc;
  switch(name) {
    case 'Avocados 12pkg': imgSrc = Avocados;
    break;
    case 'Bananas 24pkg': imgSrc = Bananas;
    break;
    case 'Eggs pkg 12': imgSrc = Eggs;
    break;
    case 'Merguez Sausage pkg 6': imgSrc = Sausages;
    break;
    default: break;
  }
  return (
    <View style={rowStyle}>
      <TouchableOpacity style={touchableStyle} onPress={props.onPress}>
        <View style={leftStyle}>
          {imgSrc && <Image style={imageStyle} source={imgSrc} />}
          <Text style={purveyorStyle}>{in_stock && 'In Stock'}</Text>
        </View>
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
