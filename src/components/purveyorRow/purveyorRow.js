import React from 'react';
import { View, Image, Text } from 'react-native';

import { rowStyle, imageStyle, titleStyle } from './styles';

export default (props) => (
  <View style={rowStyle}>
    <Image style={imageStyle} />
    <Text style={titleStyle}>{props.purveyor.name}</Text>
  </View>
)
