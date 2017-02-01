import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Madoka } from 'react-native-textinput-effects';
import { Button, Spinner } from './common';
import {
  emailChanged,
  passwordChanged,
  signinUser,
} from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onSigninPress() {
    const { email, password } = this.props;
    // console.log(email.toLowerCase());
    // const lower = email.toLowerCase();
    // const lowerEmail = email.toLowerCase();
    this.props.signinUser({ email, password });
  }
  renderSigninButton() {
    return this.props.loading ?
      <Spinner size="large" /> :
      <Button onPress={this.onSigninPress.bind(this)}>
        Sign In
      </Button>;
  }
  render() {
    const { inputStyle } = styles;
    return (
      <View style={{ top: 120, flex: 1, flexDirection: 'column' }}>
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
const styles = {
  inputStyle: {
    height: 52,
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  textStyle: {
    color: '#143D73',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingLeft: 12
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, loading, errors } = auth;
  return { email, password, loading, errors };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, signinUser }
)(LoginForm);
