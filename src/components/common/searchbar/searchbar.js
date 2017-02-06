import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TextInput } from 'react-native';

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
  render() {
    return (
      <View style={containerStyle}>
        <Icon name='search' size={20} />
        <TextInput
          style={inputStyle}
          onChangeText={this.onChange.bind(this)}
          value={this.state.text}
        />
        {<Icon name='times' size={20} />}
      </View>
    );
  }
}

export default SearchBar;
