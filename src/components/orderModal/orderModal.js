import React from 'react';
import { Text, View, Modal } from 'react-native';
import Button from 'apsl-react-native-button';
import NumberInput from 'rn-spinner';

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
          <Text>${props.product.price}</Text>
          <NumberInput
              max={10}
             min={2}
             default={1}
             color="#008445"
             numColor="#008445"
             onNumChange={(num) => { console.log(num); }}
          />
          <View>
            <Button onPress={props.closeModal}>Cancel</Button>
            <Button onPress={props.closeModal}>Add</Button>
          </View>
        </View>

    </View>
  </Modal>
);
