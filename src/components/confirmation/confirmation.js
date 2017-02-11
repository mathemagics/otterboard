import React, { Component } from 'react';
import { View, Modal } from 'react-native';
import Button from 'apsl-react-native-button';

import { containerStyle, titleBoxStyle, titleStyle,
  textStyle, confirmButtonStyle, cancelButtonStyle,
} from './styles';

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.confirm = this.confirm.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  confirm() {
    const { onConfirm } = this.props;
    onConfirm && onConfirm();
  }
  cancel() {
    const { onCancel } = this.props;
    onCancel && onCancel();
  }
  render() {
    const { title, children } = this.props
    return (
      <Modal
        transparent
        visible
        animationType='fade'
        onRequestClose={() => {}}
      >
        <View style={containerStyle}>
            <View style={titleBoxStyle}>
              <Text style={titleStyle}>{title}</Text>
            </View>
            <Text style={textStyle}>{children}</Text>
            <View>
              <Button style={confirmButtonStyle} onPress={this.confirm}>Confirm</Button>
              <Button style={cancelButtonStyle} onPress={this.cancel}>Cancel</Button>
            </View>
          </View>
      </Modal>
    );
  }
}

export default Confirmation;
