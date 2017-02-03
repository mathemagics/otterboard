import React from 'react';
import { Text, View, Modal } from 'react-native';
import Button from 'apsl-react-native-button';

import { containerStyle, contentStyle, titleStyle } from './styles';

export default (props) => (
  <Modal
    transparent
    visible
    animationType='fade'
    onRequestClose={() => {}}
  >
    <View style={containerStyle}>
        <View style={contentStyle}>
          <Text style={titleStyle}>{props.product.name}</Text>
          <Text>{props.product.origin}</Text>
          <Text>{props.product.purveyor}</Text>
          <Text>{props.product.price}</Text>
          <Button onPress={props.closeModal}>Cancel</Button>
          <Button>Add</Button>
        </View>

    </View>
  </Modal>
);
