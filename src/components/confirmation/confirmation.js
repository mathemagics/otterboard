import React from 'react';
import { View, Modal } from 'react-native';
import Button from 'apsl-react-native-button';

import { containerStyle, titleBoxStyle, titleStyle,
  textStyle, confirmButtonStyle, cancelButtonStyle,
} from './styles';

const Confirmation = (props) => (
  <Modal
    transparent
    visible
    animationType='fade'
    onRequestClose={() => {}}
  >
    <View style={containerStyle}>
        <View style={titleBoxStyle}>
          <Text style={titleStyle}>{props.title}</Text>
        </View>
        <Text style={textStyle}>{props.children}</Text>
        <View>
          <Button style={confirmButtonStyle} onPress={props.closeModal}>Confirm</Button>
          <Button style={cancelButtonStyle} onPress={props.closeModal}>Cancel</Button>
        </View>

      </View>
  </Modal>
);


export default Confirmation;
