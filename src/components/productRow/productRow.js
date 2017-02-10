import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Adder from '../common/adder';
import Eggs from '../../images/eggs.jpeg';
import Sausages from '../../images/sausages.jpeg';
import Bananas from '../../images/bananas.jpeg';
import Avocados from '../../images/avocados.jpeg';
import Yams from '../../images/yams.jpeg';

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
  const { name, in_stock, price, origin, quantity } = props.product;
  let imgSrc;
  switch(name) {
    case 'Avocados 12pkg': imgSrc = Avocados;
    break;
    case 'Bananas 24pkg': imgSrc = Bananas;
    break;
    case 'pkg 12 Eggs': imgSrc = Eggs;
    break;
    case 'Merguez Sausage pkg 6': imgSrc = Sausages;
    break;
    case 'Yams 12pkg': imgSrc = Yams;
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
          <Adder price={price} value={quantity} onModify={props.onModify} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
