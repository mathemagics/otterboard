import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import _ from 'lodash';

import styles from './styles';

export default (props) => (
  <View style={styles.container}>
    {_.map(props.categories, (val, index) => (
      <TouchableHighlight key={index}>
        <View style={{ ...styles.item, backgroundColor: val }}>
          {/* <Image source={require('../../images/meat.jpeg')} style={styles.backgroundImage} /> */}
          <Text style={styles.text}>{index}</Text>
        </View>
      </TouchableHighlight>
    ))}
  </View>
);
