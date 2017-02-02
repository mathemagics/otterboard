import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import _ from 'lodash';
import SearchBar from 'react-native-searchbar';

const CATEGORIES = {
  meat: '#a23',
  seafood: '#1cc',
  dairy: '#ddd',
  produce: '#2a2',
  other: '#222',
  nuts: '#c71',
};

export default () => (
  <View style={{ flex: 1, flexDirection: 'column', top: -20 }}>
    <View style={styles.container}>
      {_.map(CATEGORIES, (val, index) => (
        <TouchableHighlight key={index}>
          <View style={{ ...styles.item, backgroundColor: val }}>
            <Text style={styles.text}>{index}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
    <SearchBar showOnLoad hideBack heightAdjust={-10} />
  </View>
);

const styles = {
    container: {
      top: 75,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        width: 120,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#ffffff'
    }
};
