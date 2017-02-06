import React from 'react';
import { View } from 'react-native';
import SelectBox from '../selectBox';

import { containerStyles} from './styles';

export default (props) => (
  <View style={containerStyles}>
    {props.categories.map(val => (
      <SelectBox key={val}>
        {val}
      </SelectBox>
    ))}
  </View>
);
