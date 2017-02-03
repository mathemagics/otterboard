import React from 'react';
import { Text, View, Modal } from 'react-native';

import { containerStyle } from './styles';

export default (props) => (
  <Modal
    transparent
    visible
    animationType='fade'
    onRequestClose={() => {}}
  >
    <View style={containerStyle}>
        <Text>{props.product.name}</Text>
    </View>
  </Modal>
);
