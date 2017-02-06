import React, { Component } from 'react';
import { View, TextInput, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { containerStyle, inputStyle } from './styles';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  onChange(text) {
      this.setState({ text }, () => {
        if (this.props.onChange) {
          this.props.onChange(this.state.text);
        }
      });
    }
  resetText() {
    this.onChange('');
  }
  render() {
    return (
      <View style={containerStyle}>
          <Icon name='search' size={20} color="#aaa" />
        <TextInput
          placeholder="Search Products..."
          style={inputStyle}
          onChangeText={this.onChange.bind(this)}
          value={this.state.text}
          returnKeyType='search'
        />
        {
          this.state.text ?
          <TouchableHighlight onPress={this.resetText.bind(this)}>
            <Icon name='times' size={20} color="#aaa" />
          </TouchableHighlight> :
          null
        }
      </View>
    );
  }
}

export default SearchBar;
