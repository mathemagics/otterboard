import React from 'react';
import { View } from 'react-native';
import SelectBox from '../selectBox';

import styles from './styles';

export default (props) => (
  <View style={styles.container}>
    {props.categories.map(val => (
      <SelectBox key={val}>
        {val}
      </SelectBox>
    ))}
  </View>
);
