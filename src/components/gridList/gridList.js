import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default (props) => (
  <View style={styles.container}>
    {props.categories.map(val => (
      <TouchableHighlight key={val}>
        <View style={styles.item}>
          <Icon name='circle-thin' size={17} />
          <Text style={styles.text}>{val}</Text>
        </View>
      </TouchableHighlight>
    ))}
  </View>
);
