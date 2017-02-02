import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import _ from 'lodash';

const CATEGORIES = {
  meat: '#a23',
  seafood: '#1cc',
  dairy: '#ddd',
  produce: '#2a2',
  other: '#222',
  nuts: '#c71',
};

export default () => (
  <View style={styles.container}>
    {_.map(CATEGORIES, (val, index) => (
      <TouchableHighlight>
        <View style={{ ...styles.item, backgroundColor: val }}>
          <Text style={styles.text}>{index}</Text>
        </View>
      </TouchableHighlight>
    ))}
  </View>
);

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        width: 120,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#ffffff'
    }
};
