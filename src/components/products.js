import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

export default () => (
  <View style={styles.container}>
    <TouchableHighlight>
      <View style={{ ...styles.item, backgroundColor: '#fc3' }}>
        <Text style={styles.text}>Food</Text>
      </View>
    </TouchableHighlight>
    <TouchableHighlight>
      <View style={{ ...styles.item, backgroundColor: '#3cf' }}>
        <Text style={styles.text}>Food</Text>
      </View>
    </TouchableHighlight>
    <TouchableHighlight>
      <View style={{ ...styles.item, backgroundColor: '#a23' }}>
        <Text style={styles.text}>Food</Text>
      </View>
    </TouchableHighlight>
    <TouchableHighlight>
      <View style={{ ...styles.item, backgroundColor: '#aaa' }}>
        <Text style={styles.text}>Food</Text>
      </View>
    </TouchableHighlight>
    <TouchableHighlight>
      <View style={{ ...styles.item, backgroundColor: '#d0b' }}>
        <Text style={styles.text}>Food</Text>
      </View>
    </TouchableHighlight>
    <TouchableHighlight>
      <View style={{ ...styles.item, backgroundColor: '#1c1' }}>
        <Text style={styles.text}>Food</Text>
      </View>
    </TouchableHighlight>
    <TouchableHighlight>
      <View style={{ ...styles.item, backgroundColor: '#fc3' }}>
        <Text style={styles.text}>Food</Text>
      </View>
    </TouchableHighlight>
    <TouchableHighlight>
      <View style={{ ...styles.item, backgroundColor: '#3cf' }}>
        <Text style={styles.text}>Food</Text>
      </View>
    </TouchableHighlight>
    <TouchableHighlight>
      <View style={{ ...styles.item, backgroundColor: '#a23' }}>
        <Text style={styles.text}>Food</Text>
      </View>
    </TouchableHighlight>
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
