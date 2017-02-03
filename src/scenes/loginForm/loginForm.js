import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Madoka } from 'react-native-textinput-effects';
import Button from 'apsl-react-native-button';

// components
import { Spinner } from '../../components/common';

import {
  buttonStyle,
  buttonTextStyle,
  inputStyle,
} from './styles';

// action creators
import {
  emailChanged,
  passwordChanged,
  signinUser,
} from '../../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onSigninPress() {
    const { email, password } = this.props;
    this.props.signinUser({ email, password });
  }

  // show button or spinner if loading
  renderSigninButton() {
    return this.props.loading ?
      <Spinner size="large" /> :
      <Button
        style={buttonStyle}
        textStyle={buttonTextStyle}
        onPress={this.onSigninPress.bind(this)}
        activeOpacity={0.4}
      >
        Sign In
      </Button>;
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={inputStyle}>
          <Madoka
            label={'Email'}
            onChangeText={this.onEmailChange.bind(this)}
            borderColor={'#aee2c9'}
            containerStyle={{ width: 200 }}
            labelStyle={{ color: '#008445' }}
            inputStyle={{ color: '#143D73' }}
            keyBoardType='email-address'
          />
        </View>
        <View style={inputStyle}>
          <Madoka
            label={'Password'}
            onChangeText={this.onPasswordChange.bind(this)}
            borderColor={'#aee2c9'}
            containerStyle={{ width: 200 }}
            labelStyle={{ color: '#008445' }}
            inputStyle={{ color: '#143D73' }}
            secureTextEntry
          />
        </View>
        <View style={{ height: 60, top: 30 }}>
          <Text style={{ backgroundColor: '#fff' }}>{this.props.errors}</Text>
          {/* show spinner if loading, otherwise button */}
          {this.renderSigninButton()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, loading, errors } = auth;
  return { email, password, loading, errors };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, signinUser }
)(LoginForm);
