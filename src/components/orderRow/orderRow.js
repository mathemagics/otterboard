import React from 'react'
import { View, Text, } from 'react-native';

import {
  containerStyle,
  leftStyle,
  rightStyle,
  priceStyle,
  headerStyle,
  subStyle,
} from './styles';

export default ({ date, user, total}) => {
  return (
    <View style={containerStyle}>
      <View style={leftStyle}>
        <Text style={headerStyle}>{date}</Text>
        <Text style={subStyle}>{user}</Text>
      </View>
      <View style={rightStyle}>
        <Text style={priceStyle}>{total}</Text>
      </View>
    </View>
  )
}
