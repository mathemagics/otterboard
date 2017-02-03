import React from 'react';
import { Text, View, Modal } from 'react-native';

import { containerStyle } from './styles';

export default () => (
  <Modal
    transparent
    visible
    animationType='fade'
    onRequestClose={() => {}}
  >
    <View style={containerStyle}>
        <Text>OrderModal</Text>
    </View>
  </Modal>
);
